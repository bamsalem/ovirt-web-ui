// @flow

export type MessageType = string | {|
  message: string,
  description: string
|}

/**
 * Enter messages here.
 *
 * Please keep keys valid JavaScript identifiers.
 * Please don't add flow type annotation
 *
 * @type {Object.<string, (string | {message: string, description: string})>}
 */
export const messages: { [messageId: string]: MessageType } = {
  about: {
    message: 'About',
    description: 'About application',
  },
  aboutDialogApiVersion: '{brandName} API Version {version}',
  aboutDialogDocumentationLink: 'For further information see {link}',
  aboutDialogDocumentationText: 'Documentation',
  aboutDialogReportIssuesLink: 'Please report issues on {link}',
  aboutDialogVersion: 'Version {version}',
  actionFailed: '{action} failed',
  actionFeedbackShutdownVm: 'Request to shutdown VM - {VmName} has been received.',
  actionFeedbackRestartVm: 'Request to restart VM - {VmName} has been received.',
  actionFeedbackSuspendVm: 'Request to suspend VM - {VmName} has been received.',
  actionFeedbackStartVm: 'Request to run VM - {VmName} has been received.',
  actionFeedbackAllocateVm: 'Request to allocate VM from a new pool {poolname} has been received.',
  activeFilters: 'Active Filters:',
  actualStateVmIsIn: 'The actual state the virtual machine is in.',
  addNewNic: 'Add new NIC',
  addNewSnapshot: 'Add new snapshot',
  addNewVm: 'Create Virtual Machine',
  address: 'Address',
  advancedOptions: {
    message: 'Advanced Options',
    description: 'Label used on forms when there are a set of fields that are initially hidden and require a click to view.',
  },
  advancedCpuTopologyOptions: 'Advanced CPU Topology Options',
  alias: {
    message: 'Alias',
    description: 'In sense of "human friendly name"',
  },
  allocatedVms: 'Allocated VMs',
  areYouSureYouWantToDeleteDisk: 'Are you sure you want to delete disk {diskName}?',
  areYouSureYouWantToDeleteNic: 'Are you sure you want to delete NIC {nicName}?',
  areYouSureYouWantToDeleteSnapshot: 'Are you sure you want to delete snapshot {snapshotName}?',
  areYouSureYouWantToRestoreSnapshot: 'Are you sure you want to restore snapshot {snapshotName}?',
  authorizationExpired: 'Authorization expired. The page is going to be reloaded to re-login.',
  automaticPoolsNotEditable: 'The pool type of {poolName} is automatic so the details of this virtual machine are not editable.',
  availableVmsFromPool: 'Available VMs from this Pool',
  bootableEditTooltip: 'Can not change bootable option when the VM is running',
  bootMenu: 'Boot Menu',
  bootMenuTooltip: 'Boot menu allows to select bootable device. It is accessible from a console.',
  bootMenuWarning: 'All changes will take effect after reboot only.',
  bootOrder: 'Boot Order',
  bootSequence: 'Boot Sequence',
  bootSequenceTooltip: 'Device order in which VM will search OS for running.',
  cancel: 'Cancel',
  cannotUpdateCloudInitHostname: 'Host name cannot be synchronized with VM name because the VM name is not a valid host name.',
  cantLogonToConsole: 'Single sign on failed. Please check to see if the guest agent is running on your virtual machine. Contact your administrator if the problem continues.',
  cardTitleDetails: 'Details',
  cardTooltipEditDetails: 'Edit details for {vmName}',
  cd: 'CD',
  cdCanOnlyChangeWhenVmRunning: 'CD can only be changed when the VM is running',
  cdromBoot: 'CD-ROM',
  changeCd: 'Change CD',
  clear: 'Clear',
  clearAll: 'Clear all',
  clearAllFilters: 'Clear All Filters',
  clearMessages: 'Clear Messages',
  clickForHelp: 'Click for help',
  close: 'Close',
  cloudInit: {
    message: 'Cloud-Init',
    description: 'Name of technology allowing to initialize operating system installation. Most likely not translatable.',
  },
  cloudInitEnable: {
    message: 'Enable Cloud-init/Sysprep',
    description: 'Create VM form, label on checkbox to enable cloud-init/sys-prep fields',
  },
  cloudInitOptions: 'Cloud-init Options',
  cloudInitTooltip: 'Set up early initialization of Linux virtual machine using cloud-init.',
  cluster: 'Cluster',
  clusterCanOnlyChangeWhenVmStopped: 'Cluster can only be changed when the VM is stopped.',
  confirmDelete: 'Confirm Delete',
  confirmRestore: 'Confirm Restore',
  connect: {
    message: 'Connect',
    description: 'Connect button for SSO authorization modal dialog.',
  },
  connecting: {
    message: 'Connecting',
    description: 'Connecting to VNC console',
  },
  connectAutomatically: 'Connect automatically',
  connectionFailConsoleInfo: 'Cannot connect to websocket proxy server. Please check your websocket proxy certificate or ask your administrator for help. For further information please refer to the <a href=\'https://www.ovirt.org/documentation/admin-guide/virt/console-client-resources.html\'>console manual</a>.<br/>Press the \'Connect\' button to reconnect the console.',
  console: 'Console',
  consoleInstructions: 'Console Instructions',
  consoleInUseContinue: 'Console in use, continue?',
  containsConfigurationAndDisksWhichWillBeUsedToCreateThisVm: 'Contains the configuration and disks which will be used to create this virtual machine. Please customize as needed.',
  continueSessionSecondary: {
    message: 'To continue with your session, click on the \'Continue\' button.',
    description: 'Secondary message in SessionTimeout modal component.',
  },
  continueSessionBtn: {
    message: 'Continue',
    description: 'Button to continue user session in SessionTimeout modal component.',
  },
  coresPerSockets: 'Cores per Virtual Socket',
  cpus: 'Total Virtual CPUs',
  create: 'Create',
  createANewVm: 'Create A New Virtual Machine',
  created: 'Created',
  createNewDisk: 'Create New Disk',
  createSnapshot: 'Create Snapshot',
  createVm: 'Create VM',
  createVmNetEditActions: 'NIC Actions',
  createVmNetEmptyInfo: 'No NICs have been defined for this VM.',
  createVmNetEmptyTitle: 'No NICs Defined',
  createVmNetNoEditHelpMessage: 'This NIC is defined by your selected template and cannot be edited or deleted at creation.',
  createVmNetTableHeaderNicName: 'NIC Name',
  createVmNetTableHeaderType: 'Device Type',
  createVmNetTableHeaderVnicProfile: 'vNic Profile',
  createVmNetUnknownVnicProfile: 'UNKNOWN',
  createVmStorageBootableMessage: 'Only one disk can be bootable at a time. ',
  createVmStorageEditActions: 'Disk Actions',
  createVmStorageEmptyInfo: 'No Disks have been defined for this VM.',
  createVmStorageEmptyTitle: 'No Disks Defined',
  createVmStorageNoEditBootableMessage: 'Disk "{diskName}", defined by the selected template, is set as bootable. This can only be changed after the VM has been created.',
  createVmStorageNoEditHelpMessage: 'This Disk is defined by your selected template and cannot be edited or deleted at creation.',
  createVmStorageSelectDiskType: 'Select a Disk Type',
  createVmStorageSelectStorageDomain: 'Select a Storage Domain',
  createVmStorageTableHeaderBootable: 'Bootable',
  createVmStorageTableHeaderName: 'Disk Name',
  createVmStorageTableHeaderSize: 'Size',
  createVmStorageTableHeaderStorageDomain: 'Storage Domain',
  createVmStorageTableHeaderType: 'Disk Type',
  createVmStorageUnknownStorageDomain: 'UNKNOWN',
  createVmWizardButtonBack: 'Back',
  createVmWizardButtonCancel: 'Cancel',
  createVmWizardButtonClose: 'Close',
  createVmWizardButtonCloseAndNavigate: 'View the VM',
  createVmWizardButtonCreate: 'Create Virtual Machine',
  createVmWizardButtonNext: 'Next',
  createVmWizardReviewAdvancedCloudInit: 'Cloud-init enabled',
  createVmWizardReviewAdvancedSysprep: 'Sysprep enabled',
  createVmWizardReviewConfirm: 'Review and confirm settings',
  createVmWizardReviewError: 'Create VM operation FAILED',
  createVmWizardReviewInProgress: 'Create VM operation is in progress',
  createVmWizardReviewSuccess: 'Create VM operation SUCCESS',
  createVmWizardSelectCluster: 'Select Cluster',
  createVmWizardSelectClusterBeforeISO: 'Select a Cluster to select an ISO',
  createVmWizardSelectClusterBeforeOS: 'Select a Cluster to select an Operating System',
  createVmWizardSelectClusterBeforeTemplate: 'Select a Cluster to select a Template',
  createVmWizardSelectISO: 'Select ISO',
  createVmWizardSelectProvisionSource: 'Select Provision Source',
  createVmWizardSelectTemplate: 'Select Template',
  createVmWizardSourceISO: 'ISO',
  createVmWizardSourceTemplate: 'Template',
  createVmWizardStepTitleBasic: 'Basic Settings',
  createVmWizardStepTitleNetwork: 'Networking',
  createVmWizardStepTitleReview: 'Review',
  createVmWizardStepTitleStorage: 'Storage',
  createVmWizardNetVNICNameRules: 'NIC name must be unique, 50 or less alphanumeric characters or "-_."',
  currentlyInsertedIsoInCdDrive: 'Currently inserted ISO in CD drive',
  customIcon: 'Custom icon of the virtual machine.',
  customScript: 'Custom script',
  dataCenter: { message: 'Data Center', description: 'Label for the VM\'s data center' },
  dataCenterChangesWithCluster: 'Data Center cannot be changed directly. It correlates with the Cluster.',
  daysShort: 'd',
  defaultButton: 'Default',
  definedMemory: 'Defined Memory',
  delete: 'Delete',
  description: 'Description',
  details: 'Details',
  disconnect: { message: 'Disconnect', description: 'Text for disconnect button in noVNC console' },
  disconectedConsole: 'Disconnected from Console',
  disconectedConsoleInfo: 'The console has been disconnected. Press the \'Connect\' button to reconnect the console.',
  diskActionCreateNew: 'Create Disk',
  diskCapacity: 'Disk Capacity',
  diskDeleteDisabledTooltip: 'Disks cannot be deleted when the VM is running.',
  diskDeleteTooltip: 'Delete',
  diskLabelBootable: 'bootable',
  diskLabelInactive: 'inactive',
  diskEditDisabledTooltip: 'Cannot edit the Disk at this time',
  diskEditTooltip: 'Edit',
  diskEditorAliasLabel: 'Name',
  diskEditorBootableLabel: 'Bootable',
  diskEditorBootableChangeMessage: 'Only one disk can be bootable at a time. The bootable flag will be removed from "{diskName}" and placed on this disk.',
  diskEditorDiskDeletingTooltip: 'The disk is being deleted.',
  diskEditorDiskTypeCantChangeHelp: 'Disk type cannot be changed after it has been created.',
  diskEditorDiskTypeCreateHelp: 'Once you have selected a disk type, you will not be able to change it.',
  diskEditorDiskTypeLabel: 'Disk Type',
  diskEditorDiskTypeNotAvailable: 'N/A',
  diskEditorDiskTypeOptionPre: {
    message: 'Preallocated',
    description: 'Select list option for raw / preallocated format disk images',
  },
  diskEditorDiskTypeOptionThin: {
    message: 'Thin Provision',
    description: 'Select list option for qcow / thin provisioned format disk images',
  },
  diskEditorResizeLabel: 'Increase Size By (GiB)',
  diskEditorSizeCantChangeHelp: 'Disk size cannot be extended for this type of disk.',
  diskEditorSizeCreateHelp: 'After you create a disk, you may only extend its size if you make edits.',
  diskEditorSizeLabel: 'Size (GiB)',
  diskEditorSizeEditLabel: 'Current Size (GiB)',
  diskEditorResizeNote: `After resizing the disk, you must also increase the size of the guest's filesystem`,
  diskEditorStorageDomainCantChangeHelp: 'A disk\'s storage domain cannot be changed after it has been created.',
  diskEditorStorageDomainCreateHelp: 'Once you have selected a storage domain, you will not be able to change it.',
  diskEditorStorageDomainLabel: 'Storage Domain',
  diskEditorStorageDomainNotAvailable: 'N/A',
  diskStateActiveTooltip: 'Active',
  diskStateInactiveTooltip: 'Inactive',
  diskStateLockedTooltip: 'Locked',
  disks: 'Disks',
  disksCardEditTooltip: 'Edit Disks for {vmName}',
  diskSizeHasToBeAPositiveInteger: 'Disk size has to be a positive integer.',
  displayAll: 'Display all',
  downloadVirtManagerMSI: 'Download the MSI from virt-manager.org',
  downloadVVFile: 'Download VV File',
  downloadedSPICE: 'The VV file has been downloaded. Select the file to view the SPICE console on a desktop viewer.',
  downloadedVNC: 'The VV file has been downloaded. Select the file to view the VNC console on a desktop viewer.',
  downloadedVVFile: 'VV File Downloaded',
  downloadedRDP: 'The RDP file has been downloaded. Select the file to view the RDP console on a desktop viewer.',
  downloadedRDPFile: 'RDP File Downloaded',
  edit: 'Edit',
  editDisk: 'Edit Disk',
  editNic: 'Edit NIC',
  editVm: 'Edit the VM',
  empty: 'Empty',
  emptySnapshotDescription: 'Snapshot description is missing.',
  enterVmDescription: 'Enter VM Description (optional)',
  enterVmName: 'Enter VM Name',
  enum_DiskInterface_ide: { message: 'IDE', description: 'IDE controller VM disk attachment interface' },
  enum_DiskInterface_virtio: { message: 'VirtIO', description: 'virtio controller VM disk attachment interface' },
  enum_DiskInterface_virtio_scsi: { message: 'VirtIO-SCSI', description: 'virtio SCSI controller VM disk attachment interface' },
  enum_NicInterface_e1000: {
    message: 'e1000',
    description: 'Display name of a NIC that provides an E1000 based interface to the VM',
  },
  enum_NicInterface_rtl8139: {
    message: 'rtl8139',
    description: 'Display name of a NIC that provides a Realtek RTL8139 interface to the VM',
  },
  enum_NicInterface_virtio: {
    message: 'VirtIO',
    description: 'Display name of a NIC that provides a virtio based interface to the VM',
  },
  enum_Switch_off: {
    message: 'OFF',
    description: 'Toggle switch/checkbox Off state label',
  },
  enum_Switch_on: {
    message: 'ON',
    description: 'Toggle switch/checkbox On state label',
  },
  enum_VmStatus_down: {
    message: 'Off',
    description: 'VM is turned off. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_image_locked: {
    message: 'Image locked',
    description: 'Disk image is locked. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_migrating: {
    message: 'Migrating',
    description: 'VM is migrating from one host machine to another host machine. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_paused: {
    message: 'Paused',
    description: 'VM is paused. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_powering_down: {
    message: 'Powering down',
    description: 'VM is being turned off. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_powering_up: {
    message: 'Powering up',
    description: 'VM is starting. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_reboot_in_progress: {
    message: 'Reboot in progress',
    description: 'One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_restoring_state: {
    message: 'Restoring state',
    description: 'Waking up from hibernation. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_saving_state: {
    message: 'Saving state',
    description: 'Being hibernated. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_suspended: {
    message: 'Suspended',
    description: 'Hibernated. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_unassigned: {
    message: 'Unassigned',
    description: 'Error when obtaining virtual machine status. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_unknown: {
    message: 'Unknown',
    description: 'VM is in unknown state. Connection to hypervisor is probably broken. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_up: {
    message: 'Running',
    description: 'VM is running. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_wait_for_launch: {
    message: 'Waiting for launch',
    description: 'VM is down but planned to started. be One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_not_responding: {
    message: 'Not responding',
    description: 'VM is not responding. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  errorWhileCreatingNewDisk: 'Error while creating new disk:',
  failedToChangeVmIcon: 'Failed to change VM icon',
  failedToChangeVmIconToDefault: 'Failed to change VM icon to default',
  failedToGetVmConsole: 'Failed to get the VM console',
  failedToRemoveVm: 'Failed to remove the VM',
  failedToRestartVm: 'Failed to restart the VM',
  failedToRetrieveDiskDetails: 'Failed to retrieve disk details',
  failedToRetrieveIsoStorages: 'Failed to retrieve ISO storages',
  failedToRetrieveListOfVmConsoles: 'Failed to retrieve list of VM consoles',
  failedToRetrieveVmConsoleDetails: 'Failed to retrieve VM console details',
  failedToRetrieveVmDetails: 'Failed to retrieve VM details',
  failedToRetrieveVmDisks: 'Failed to retrieve VM disks',
  failedToRetrieveVmIcon: 'Failed to retrieve VM icon',
  failedToShutdownVm: 'Failed to shutdown the VM',
  failedToStartVm: 'Failed to start the VM',
  failedToSuspendVm: 'Failed to suspend the VM',
  firstDevice: 'First Device',
  firstDeviceTooltip: 'First device in order.',
  force: 'Force',
  fqdn: { message: 'FQDN', description: 'Label for the VM guest agent reported full qualified domain name' },
  freeBrowsers: 'Free browsers:',
  fullScreen: 'Full Screen',
  fullyQualifiedDomainName: 'Fully Qualified Domain Name (FQDN) of the virtual machine. Please note, guest agent must be installed within the virtual machine to retrieve this value.',
  gitHub: 'GitHub',
  globalErrorBoundaryTitle: 'Sorry, VM Portal is currently having some issues.',
  globalErrorBoundaryDescription: 'Please refresh the page or log out and log back in. If the issue persists, please report a bug on {bugUrl}',
  goBack: 'Go Back',
  groupOfHostsVmCanBeRunningOn: 'Group of hosts the virtual machine can be running on.',
  hdBoot: 'Hard Disk',
  host: { message: 'Host', description: 'Label for host where the VM is running' },
  hostConsole: {
    message: 'Host Console',
    description: 'Label of link to the Cockpit app',
  },
  hostName: 'Hostname',
  hostNameTooltip: 'Virtual Machine hostname.',
  hotPlugConfirmApplyAfterRestart: 'Apply after Restart',
  hotPlugConfirmApplyNow: 'Apply Changes Now',
  hotPlugConfirmContent: 'Apply Changes Now with Hot Plug',
  hotPlugConfirmContentDetail:
  'Applying the changes to CPU and/or Memory can be done right now but it requires ' +
  'doing a hot plug.  You can choose to apply these changes after a restart instead.',
  hotPlugConfirmTitle: 'Apply Changes',
  hoursShort: 'h',
  htmlPleaseReferToDocumentationForMoreInformation: 'Please refer to <a href="{documentationUrl}" target="_blank">documentation</a> for more information.',
  htmlUnsupportedOvirtVersionFoundButVersionAtLeastRequired: '<strong>Unsupported {version} {productName} version,</strong> found but version at least {requiredVersion} is required.',
  icon: 'Icon',
  ifVmIsRunningClickToAccessItsGraphicsConsole: 'If the virtual machine is running, click the protocol name to access its Graphical Console.',
  inPreview: 'In Preview',
  ieNotSupported: 'Internet Explorer is not a supported browser.',
  ipAddress: { message: 'IP Address', description: 'Label for IP addresses reported by VM guest agent' },
  isPersistMemorySnapshot: 'Content of the memory of the virtual machine is included in the snapshot.',
  itemDoesntExistOrDontHavePermissions: 'The item doesn\'t exist or you do not have the permissions to view it.',
  less: {
    message: 'less',
    description: 'more/less pair used to control collapsible long listing',
  },
  loadingTripleDot: {
    message: 'Loading ...',
    description: 'Pending request to the server indicator label.',
  },
  locked: 'Locked',
  logBackIn: 'Log Back In',
  loggedOut: 'Logged Out',
  logOut: 'Log out',
  logOutInSecondsSecondary: 'You will be logged out in {seconds} seconds if there is no further activity in your session.',
  logoutDeveloperMessage: 'The app has been put in a logged out state, but the SSO token may still be active. Click log in to restart the app with the existing SSO token.',
  logoutTokenExpiredMessage: 'The app has been put in a logged out state due token expired.',
  logoutMessageAutomatic: 'You have been logged out due to inactivity.',
  logoutMessageManual: 'You have been logged out.',
  logoutRedirected: 'You will be redirected to the log in page momentarily.',
  lowOVirtVersion: 'SSH keys can not be managed with recent oVirt <strong>{apiVersion}</strong> version. Please upgrade oVirt to <strong>4.2</strong> or higher.',
  mapCtrlAltDelKeyboardShortcutToCtrlAltEnd: 'Map Ctrl + Alt + Del keyboard shortcut to Ctrl + Alt + End',
  maxNumberOfVms: 'A maximum of {numberOfVms} VMs from this pool may be allocated for your use.',
  memory: 'Memory',
  memoryIncluded: '(State included)',
  messages: 'Messages',
  minutesShort: 'm',
  monthsShort: 'M',
  more: {
    message: 'more',
    description: 'more/less pair used to control collapsible long listing',
  },
  name: {
    message: 'Name',
    description: 'Virtual machine name',
  },
  network: 'Network',
  networkBoot: 'Network (PXE)',
  new: {
    message: 'New',
    description: 'New disk',
  },
  newNic: {
    message: 'New',
    description: 'New NIC',
  },
  newSnapshot: 'New snapshot',
  nextRunConfirmActionSave: 'Save Changes',
  nextRunConfrimActionSaveRestart: 'Save Changes and Restart',
  nextRunConfirmContent: 'Some Configuration Changes Will Be Applied on Restart',
  nextRunConfirmContentDetail:
    'Some configuration changes will not be able to take effect until the ' +
    'Virtual Machine is restarted next.  A power cycle needs to take place to ' +
    'pick up this new configuration.',
  nextRunConfirmTitle: 'Configuration Change on Restart',
  nextSnapshotsWillBeDeleted: 'Restoring this snapshot will also delete newer snapshots:',
  nic: 'Network interfaces',
  nicActionCreateNew: 'Create NIC',
  nicCardEditTooltip: 'Edit NICs for {vmName}',
  nicDeleteDisabledTooltip: 'NICs cannot be deleted when the VM is running.',
  nicDeleteTooltip: 'Delete',
  nicEditDisabledTooltip: 'Cannot edit the NIC at this time',
  nicEditTooltip: 'Edit',
  nicEditorNameLabel: 'Name',
  nicEditorInterfaceLabel: 'Type',
  nicEditorInterfaceCantEditHelp: 'A NIC\'s type can only be changed when the VM is stopped.',
  nicEditorLinkStateLabel: 'Link State',
  nicEditorLinkStateDown: 'Down',
  nicEditorLinkStateUp: 'Up',
  nicIP4: { message: 'IPv4', description: 'Label for the IPv4 addresses reported on a Nic' },
  nicIP6: { message: 'IPv6', description: 'Label for the IPv6 addresses reported on a Nic' },
  nicLinkDownTooltip: 'Link is Down',
  nicLinkUpTooltip: 'Link is Up',
  nicNoVnicAssigned: 'N/A',
  nicsTooltip: 'Connected VM network interfaces.',
  noActiveStorageDomainInDataCenter: 'There is no active data storage domain in data center "{dataCenterName}"',
  noCdsAvailable: 'No CDs available',
  noClustersAvailable: 'No Clusters available',
  noDisks: 'no disks',
  noError: 'No error',
  noMessages: 'There are no notifications to display.',
  noneItem: '[None]',
  noNetwork: 'No network',
  noNics: 'no NICs',
  noSnapshots: 'no snapshots',
  notAvailable: {
    message: 'N/A',
    description: 'Displayed when a value is not available in the VM\'s state',
  },
  notAvailableUntilRunning: {
    message: 'This field is only available when the VM is running.',
    description: 'Tooltip displayed next to \'notAvailable\' for fields that require the VM to be up',
  },
  notAvailableUntilRunningAndGuestAgent: {
    message: 'This field is only available when the VM is running and the guest agent is installed and running.',
    description: 'Tooltip displayed next to \'notAvailable\' for fields that require the VM to be up and a running guest agent',
  },
  notifications: 'Notifications',
  notEditableForPoolsOrPoolVms: 'Not editable for Pools or pool VMs.',
  noVmAvailable: 'No VM available.',
  noVmAvailableForLoggedUser: 'No VM is available for the logged user.',
  off: 'Off',
  ok: 'OK',
  on: 'On',
  os: 'Operating System',
  openProtocolConsole: 'Open {protocol} Console',
  operatingSystem: 'Operating System',
  operatingSystemInstalledOnVm: 'Operating system installed on the virtual machine.',
  optimizedFor: 'Optimized For',
  optionalUserDescriptionOfVm: 'Optional user description of the virtual machine.',
  options: 'Options',
  password: 'Password',
  permissionsNoCreateVm: 'You do not have the required permissions to create a new VM.',
  permissionsNoEditVm: 'You do not have the required permissions to edit a VM.',
  permissionsNoEditThisVm: 'You do not have permissions to edit VM {name} / {vmId}',
  pendingChanges: 'Pending Changes',
  pleaseEnterValidDiskName: 'Please enter a valid disk name. Only lower-case and upper-case letters, numbers, and \'_\',\'-\',\'.\' are allowed.',
  pleaseEnterValidVmName: 'Please enter a valid virtual machine name. Only lower-case and upper-case letters, numbers, and \'_\',\'-\',\'.\' are allowed.',
  preserveDisks: 'Preserve disks',
  pressF11ExitFullScreen: 'Press F11 to exit full screen mode',
  provisionSource: {
    message: 'Provision Source',
    description: 'label on Create New VM',
  },
  publicSSHKey: 'Specify public key for access to guest serial console via SSH authentication.',
  rdpConsole: 'RDP Console',
  rdpConsoleOpen: 'Open RDP Console',
  reboot: {
    message: 'Reboot',
    description: 'Toolbar button to reboot a VM',
  },
  rebootVm: 'Reboot the VM',
  rebootVmQuestion: 'Are you sure you want to Restart the VM?',
  recomendedPower8ValuesForThreads: 'Your cluster architecture is POWER, we recommend using 1 through {threads} values ({threads} for high load VMs).',
  recomendedValuesForThreads: 'Please check your host architecture to make sure it is properly set up before changing the value. If you are not sure, we recommend keeping threads-per-core set to 1.',
  refresh: {
    message: 'Refresh',
    description: 'Reload data from server',
  },
  remoteViewerConnection: 'Remote Viewer Connection',
  remoteViewerAvailable: 'Remote Viewer is available for most operating systems. To install it, search for it in GNOME Software or run the following:',
  remove: 'Remove',
  removeVm: 'Remove VM',
  removeVmQustion: 'Are you sure you want to remove the VM? All of the data attached to the VM will be removed as well.',
  restore: {
    message: 'Restore',
    description: 'Confirmation modal action button label for a Restore operation',
  },
  results: {
    message: '{total} Results',
    description: 'Number of filtered fetched VMs (including pools)',
  },
  resultsOf: {
    message: '{available} of {total} Results',
    description: 'Number of all fetched VMs (including pools)',
  },
  run: 'Run',
  save: 'Save',
  secondDevice: 'Second Device',
  secondDeviceTooltip: 'Second device in order.',
  secondsShort: 's',
  sendShortcutKey: 'Send Key',
  sendCtrlAltDel: 'Ctrl+Alt+Del',
  serviceTip: 'Launch VM service - {serviceName}',
  sessionExpired: {
    message: 'Your session is about to timeout due to inactivity.',
    description: 'Primary message for SessionTimeout modal component',
  },
  shutdown: 'Shutdown',
  shutdownStatelessPoolVm: 'This virtual machine belongs to {poolName} and is stateless so any data that is currently attached to the virtual machine will be lost if it is shutdown. The virtual machine will be returned to {poolName} if shutdown.',
  shutdownVm: 'Shutdown the VM',
  shutdownVmQuestion: 'Are you sure you want to Shutdown the VM?',
  size: {
    message: 'Size',
    description: '... of disk of virtual machine',
  },
  smartcardEnabled: 'Smartcard enabled:',
  snapshot: 'Snapshots',
  snapshotRestore: 'Restore Snapshot',
  snapshotDelete: 'Delete Snapshot',
  snapshotInfo: 'All attached disks will be included in the snapshot. Content of memory will be included only if VM is running.',
  snapshotsTooltip: 'VM snapshots.',
  sshAuthorizedKeys: 'SSH Authorized Keys',
  sshAuthorizedKeysTooltip: 'New line separated public SSH keys allowing for passwordless remote login.',
  SSHKey: 'SSH Key',
  spiceConsole: 'SPICE Console',
  spiceConsoleOpen: 'Open SPICE Console',
  startVm: 'Start the VM',
  startVmOnCreation: 'Start virtual machine on creation',
  state: 'State',
  status: 'Status',
  storageConnectedToVm: 'Storage connected to the virtual machine.',
  storageDomain: {
    message: 'Storage domain',
    description: 'An entity in the system where disks of virtual machines are stored. Abstraction of external file/block storages.',
  },
  storageDomainFreeSpace: {
    message: '({size} {unit} free)',
    description: 'Show the amount of free space a storage domain has when rendered in a select list of storage domains',
  },
  suspend: 'Suspend',
  suspendVm: 'Suspend the VM',
  suspendVmQuestion: 'Are you sure you want to Suspend the VM?',
  sysprep: 'Sysprep',
  sysPrepAdministratorPassword: {
    message: 'Administrator Password',
    description: 'VM sysprep label to set the administrator\'s password',
  },
  sysPrepCustomScript: 'Custom Script',
  sysPrepTimezone: 'Timezone',
  sysPrepOptions: 'SysPrep Options',
  takeVm: 'Take a Virtual Machine',
  template: 'Template',
  templateDefined: 'Template Defined',
  timeAgo: '{time} ago',
  timezone: 'Timezone',
  thisOperationCantBeUndone: 'This operation cannot be undone.',
  threadsPerCores: 'Threads per Core',
  totalCountOfVirtualProcessorsVmWillBeEquippedWith: 'Total count of virtual processors the virtual machine will be equipped with.',
  totalCpuTooltip: 'Total virtual CPUs include {sockets} virtual sockets, {cores} cores per socket, and {threads} thread per core.',
  totalMemoryVmWillBeEquippedWith: 'Total memory the virtual machine will be equipped with.',
  troubleWithFindingPage: 'We\'re having trouble finding that page.',
  typeOfWorkloadVmConfigurationIsOptimizedFor: 'Type of workload the virtual machine configuration is optimized for.',
  uniqueNameOfTheVirtualMachine: 'Unique name of the virtual machine.',
  unknown: {
    message: 'unknown',
    description: 'followed by "version" to create "unknown version"',
  },
  unknownDatacenter: {
    message: 'unknown',
    description: 'unknown data center',
  },
  unsavedChangesConfirmMessage: {
    message: 'Are you sure you want to drop your changes?',
    description: 'Message in the modal dialog opened when a user tried to navigate off an editor page after changes have been made.',
  },
  unsavedChangesTitle: {
    message: 'Dialog contains unsaved changes',
    description: 'Title of modal dialog opened when a user tried to navigate off an editor page after changes have been made.',
  },
  updateCloudInit: 'Do you want update Cloud-init hostname on new VM name?',
  updateVm: 'Update VM',
  upload: 'Upload',
  uploadIconFilesizeTooLarge: 'Image size should be {maxIconSize} KiB or less.',
  uploadIconNotImage: 'Icon should be an image.',
  uptimeDuration: {
    message: '(up {uptime})',
    description: 'contain a VM\'s formatted uptime duration string',
  },
  utilization: { message: 'Utilization', description: 'Title of Utilization card on VM Details' },
  utilizationCardAllocated: 'Allocated',
  utilizationCardAvailable: 'Available',
  utilizationCardDiskUsed: {
    message: '{used} of {total} {storageUnits} Used',
    description: 'Used amount of a single file system on a VM (HTML may be embedded to emphasize the amounts',
  },
  utilizationCardOf: {
    message: 'of {number} {storageUnits}',
    description: 'example: "of 3.2 GiB"',
  },
  utilizationCardOf100: 'of 100%',
  utilizationCardOfProvisioned: {
    message: 'of {number} {storageUnits} Provisioned',
    description: 'example: "of 1.2 GiB Provisioned"',
  },
  utilizationCardLegendAvailable: 'Available',
  utilizationCardLegendAvailableP: '% Available',
  utilizationCardLegendUsed: 'Used',
  utilizationCardLegendUsedP: '% Used',
  utilizationCardNoGuestAgent: 'It looks like no guest agent is configured on the VM.',
  utilizationCardNoAttachedDisks: 'It looks like no disk is attached to VM.',
  utilizationCardTitleCpu: 'CPU',
  utilizationCardTitleDisk: 'Disk',
  utilizationCardTitleMemory: 'Memory',
  utilizationCardTitleNetworking: 'Networking',
  utilizationCardUnallocated: 'Unallocated',
  utilizationCardUnitAllocated: '{storageUnit} Allocated',
  utilizationCardUnitNumber: {
    message: '{number} {storageUnits}',
    description: 'example: "4.2 TiB"',
  },
  utilizationCardUnitUsed: '{storageUnit} Used',
  utilizationNoDataAvailableTitle: 'No Data Available',
  utilizationNoDataAvailableMessage: 'Utilization data is only available when the VM is running.',
  utilizationNoHistoricData: 'No historic data available',
  utilizationNoNetStats: 'Network utilization is not currently available for this VM.',
  useBrowserBelow: 'Please use one of the browsers below.',
  useCtrlAltEnd: 'Use Ctrl+Alt+End',
  usingRemoteViewer: 'Using a remote viewer relies on a downloaded .vv file.',
  vcpuTopology: 'VCPU Topology',
  viewAllVirtualMachines: 'View All Virtual Machines',
  virtualMachines: 'Virtual Machines',
  virtualSockets: 'Virtual Sockets',
  vmHasPendingConfigurationChanges: 'This VM has pending configurations changes that will be applied once the VM is shutdown (or rebooted).',
  vmMemory: 'VM Memory',
  vmPortal: 'VM Portal',
  vmPoolSnapshotRestoreUnavailable: 'This VM is from a pool, so this action is unavailable.',
  vmType_desktop: 'Desktop',
  vmType_highPerformance: 'High Performance',
  vmType_server: 'Server',
  vncConsole: 'VNC Console',
  vncConsoleOpen: 'Open VNC Console',
  vncConsoleBrowser: 'VNC Console (Browser)',
  vncConsoleBrowserOpen: 'Open VNC Console (Browser)',
  vnicProfile: 'VNIC Profile',
  vnicProfileEmpty: '<Empty>',
  yearsShort: 'y',
  yes: 'Yes',
  youHaveNoAllowedVnicProfiles: 'You cannot create or edit NICs because you do not have permission to use any vNIC Profiles in the VM\'s Data Center.',
}

export type MessageIdType = $Keys<typeof messages>
