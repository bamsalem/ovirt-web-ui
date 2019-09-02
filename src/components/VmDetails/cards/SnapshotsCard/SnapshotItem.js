import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import {
  Icon,
  OverlayTrigger,
  Tooltip,
  noop,
} from 'patternfly-react'

import style from './style.css'

import { msg } from '_/intl'
import RestoreConfirmationModal from './RestoreConfirmationModal'
import DeleteConfirmationModal from '../../../VmModals/DeleteConfirmationModal'
import SnapshotDetail from './SnapshotDetail'
import { deleteVmSnapshot } from './actions'
import { formatDateFromNow } from '_/helpers'
import { getMinimizedString, escapeHtml } from '../../../utils'
import OverlayTooltip from '_/components/OverlayTooltip'
const MAX_DESCRIPTION_SIZE = 50

const SnapshotAction = ({ children, className, disabled, id, onClick }) => {
  return (
    <a
      id={id}
      onClick={disabled ? noop : onClick}
      className={`${className} ${disabled && 'disabled'}`}
    >
      {children}
    </a>
  )
}
SnapshotAction.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
}

const StatusTooltip = ({ icon, text, id }) => {
  return <OverlayTrigger overlay={<Tooltip id={id}>{text}</Tooltip>} placement='left' trigger={['hover', 'focus']}>
    <a>{icon}</a>
  </OverlayTrigger>
}
StatusTooltip.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

const SnapshotItem = ({ snapshot, vmId, isEditing, id, isVmDown, hideActions, onSnapshotDelete }) => {
  let statusIcon = null
  let buttons = []

  // Snapshot actions
  const isActionsDisabled = !isEditing || snapshot.get('status') === 'locked'
  const isRestoreDisabled = isActionsDisabled || !isVmDown
  if (!snapshot.get('isActive')) {
    // Info popover
    buttons.push(<OverlayTrigger
      overlay={
        <SnapshotDetail key='detail' id={`${id}-info-popover`} snapshot={snapshot} vmId={vmId} restoreDisabled={isRestoreDisabled} />
      }
      placement='left'
      trigger='click'
      rootClose
      key='info'
    >
      <a id={`${id}-info`}>
        <OverlayTooltip id={`${id}-info-tt`} tooltip={msg.details()}>
          <Icon type='pf' name='info' />
        </OverlayTooltip>
      </a>
    </OverlayTrigger>)

    if (!hideActions) {
      // Restore action
      buttons.push(<RestoreConfirmationModal
        key='restore'
        disabled={isRestoreDisabled}
        snapshot={snapshot}
        vmId={vmId}
        id={`${id}-restore-modal`}
        trigger={
          <SnapshotAction key='restore' id={`${id}-restore`} >
            <OverlayTooltip id={`${id}-restore-tt`} tooltip={msg.snapshotRestore()}>
              <Icon type='fa' name='play-circle' />
            </OverlayTooltip>
          </SnapshotAction>
        }
      />)

      // Delete action
      buttons.push(<DeleteConfirmationModal
        key='delete'
        disabled={isActionsDisabled}
        id={`${id}-delete-modal`}
        trigger={
          <SnapshotAction key='delete' id={`${id}-delete`}>
            <OverlayTooltip id={`${id}-delete-tt`} tooltip={msg.snapshotDelete()}>
              <Icon type='pf' name='delete' />
            </OverlayTooltip>
          </SnapshotAction>
        }
        onDelete={onSnapshotDelete}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: msg.areYouSureYouWantToDeleteSnapshot({
              snapshotName: `"<strong>${escapeHtml(snapshot.get('description'))}</strong>"`,
            }),
          }}
        />
        <div>{msg.thisOperationCantBeUndone()}</div>
      </DeleteConfirmationModal>)
    }

    // Status tooltip
    const tooltipId = `${id}-status-icon-${snapshot.get('status')}`
    switch (snapshot.get('status')) {
      case 'locked':
        statusIcon = <StatusTooltip icon={<Icon type='pf' name='locked' />} text={msg.locked()} id={tooltipId} />
        break
      case 'in_preview':
        statusIcon = <StatusTooltip icon={<Icon type='fa' name='eye' />} text={msg.inPreview()} id={tooltipId} />
        break
      case 'ok':
        statusIcon = <StatusTooltip icon={<Icon type='pf' name='ok' />} text={msg.ok()} id={tooltipId} />
        break
    }
  }

  return (
    <div className={style['snapshot-item']} id={id}>
      <span className={style['snapshot-item-status']} id={`${id}-status-icon`}>{statusIcon}</span>
      <span className={style['snapshot-item-name']} id={`${id}-description`}>
        {getMinimizedString(snapshot.get('description'), MAX_DESCRIPTION_SIZE)}
        <span className={style['snapshot-item-time']} id={`${id}-time`}>{`(${formatDateFromNow(snapshot.get('date'))})`}</span>
      </span>
      <span className={style['snapshot-item-actions']} id={`${id}-actions`}>{ buttons }</span>
    </div>
  )
}
SnapshotItem.propTypes = {
  snapshot: PropTypes.object.isRequired,
  vmId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isEditing: PropTypes.bool,
  hideActions: PropTypes.bool,
  isVmDown: PropTypes.bool,
  onSnapshotDelete: PropTypes.func.isRequired,
}

export default connect(
  (state) => ({ }),
  (dispatch, { vmId, snapshot }) => ({
    onSnapshotDelete: () => dispatch(deleteVmSnapshot({ vmId, snapshotId: snapshot.get('id') })),
  })
)(SnapshotItem)
