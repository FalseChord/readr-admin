export const managerTools = [
  {
    name: 'candidate',
    route: 'project-candidate'
  },
  {
    name: 'project',
    route: 'project-manager',
    sub: [
      { name: 'project', route: 'project-manager/project' },
      { name: 'candidate', route: 'project-manager/candidate' }
    ]
  },
  {
    name: 'report',
    route: 'report-manager',
    sub: [
      { name: 'report', route: 'report-manager/report' },
    ]
  },
  {
    name: 'memo',
    route: 'memo-manager',
    sub: [
      { name: 'memo-list', route: 'memo-manager/list' },
      { name: 'memo-replies', route: 'memo-manager/replies' }
    ]
  },
]
export const ROLE_MAP = [
  { key: 9, value: '管理員', route: 'admin' },
  { key: 3, value: '編輯', route: 'editor' },
  { key: 2, value: '總編', route: 'guesteditor' },
  { key: 1, value: '會員', route: 'member' }
]
export const PROJECT_STATUS_MAP = [
  { code: 0, name: 'status_canadate' },
  { code: 1, name: 'status_wip' },
  { code: 2, name: 'status_finished' },
]
export const PROJECT_PUBLISH_STATUS_MAP = [
  { code: 0, name: 'status_unpublished' },
  { code: 1, name: 'status_draft' },
  { code: 2, name: 'status_published' },
  { code: 3, name: 'status_scheduling' },
]

export const REPORT_PUBLISH_STATUS_MAP = [
  { code: 0, name: 'status_unpublished' },
  { code: 1, name: 'status_draft' },
  { code: 2, name: 'status_published' },
  { code: 3, name: 'status_scheduling' },
]

export const MEMO_PUBLISH_STATUS_MAP = [
  { code: 0, name: 'status_draft' },
  { code: 1, name: 'status_scheduled' },
  { code: 2, name: 'status_published' },
  { code: 3, name: 'status_deactive' },
]