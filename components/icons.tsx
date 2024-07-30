import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  X,
  BotIcon,
  FolderClosed,
  LayoutDashboard,
  LucideIcon,
  MessageSquare,
  Key,
  Coins,
  ArrowUp,
  CheckCheck,
  ArrowDown,
  Import,
  BadgePlus,
  Copy,
  Download,
  Send,
  Loader,
  RefreshCcw,
  Paperclip,
  Code,
  Layers3,
  Sparkles,
  Brush,
  Users,
  Webhook,
  SquareArrowOutUpRight,
  Info
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  document: File,
  paperclip: Paperclip,
  reload: RefreshCcw,
  loading: Loader,
  send: Send,
  download: Download,
  copy: Copy,
  badgeplus: BadgePlus,
  import: Import,
  logo: Command,
  folder: FolderClosed,
  dashboard: LayoutDashboard,
  close: X,
  key: Key,
  checkcheck: CheckCheck,
  coin: Coins,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  tooltip: Info,
  bot: ({ ...props}: LucideProps) => {
    return  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    fill="none"
    aria-hidden="true"
    className="icon-SPAGX icon_large-LrSiK"
    data-testid="svg-icon"
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill='url("#a")'
      fillRule="evenodd"
      d="M4.604 2.267a.427.427 0 0 1 .792 0l.536 1.329a.854.854 0 0 0 .472.472l1.329.536a.427.427 0 0 1 0 .792l-1.329.536a.854.854 0 0 0-.472.472l-.536 1.329a.427.427 0 0 1-.792 0l-.536-1.329a.854.854 0 0 0-.472-.472l-1.329-.536a.427.427 0 0 1 0-.792l1.329-.536a.854.854 0 0 0 .472-.472l.536-1.329Zm9.472 3.357c.335-.832 1.513-.832 1.848 0l1.25 3.1c.203.502.6.9 1.103 1.102l3.1 1.25c.83.335.83 1.513 0 1.848l-3.1 1.25c-.502.203-.9.6-1.103 1.103l-1.25 3.1c-.335.83-1.513.83-1.848 0l-1.25-3.1c-.202-.502-.6-.9-1.103-1.103l-3.1-1.25c-.83-.335-.83-1.513 0-1.848l3.1-1.25c.503-.202.9-.6 1.103-1.103l1.25-3.1Zm-8.68 10.643a.427.427 0 0 0-.792 0l-.536 1.329a.854.854 0 0 1-.472.472l-1.329.536a.427.427 0 0 0 0 .792l1.329.536a.854.854 0 0 1 .472.472l.536 1.329a.427.427 0 0 0 .792 0l.536-1.329a.854.854 0 0 1 .472-.472l1.329-.536a.427.427 0 0 0 0-.792l-1.329-.536a.854.854 0 0 1-.472-.472l-.536-1.329Z"
      clipRule="evenodd"
    />
    <defs xmlns="http://www.w3.org/2000/svg">
      <linearGradient
        id="a"
        x1={-36.5}
        x2={-32.601}
        y1={-6}
        y2={28.14}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.211} stopColor="#47D1C4" />
        <stop offset={0.296} stopColor="#85E1FF" />
        <stop offset={0.615} stopColor="#867AFF" />
        <stop offset={1} stopColor="#E87EF1" />
      </linearGradient>
    </defs>
  </svg>
  },
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  code: Code,
  layers: Layers3,
  sparkles: Sparkles,
  brush: Brush,
  users: Users,
  webhook: Webhook,
  link: SquareArrowOutUpRight,
  logs: ({ ...props }: LucideProps) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" color={props.color} className={props.className}><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"></path></svg>),
  google: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
  ),
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  message: MessageSquare,
  twitter: Twitter,
  check: Check,
  newChatbot: ({...props}: LucideProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="text-zinc-400 group-hover:text-violet-600 h-5 w-5 shrink-0"  {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path></svg>
  }
}