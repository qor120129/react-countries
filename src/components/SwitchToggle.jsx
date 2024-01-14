import { useState } from 'react'
import { Switch } from '@headlessui/react'

const SwitchToggle = ({ toggleTheme }) => {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      onClick={toggleTheme}
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? 'bg-slate-50 border-slate-50 ' : 'bg-blue-900'}
          relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full  border-blue-900 border-2 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-1  focus-visible:ring-white/75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${enabled ? 'translate-x-4 ' : 'translate-x-0 bg-slate-50 '}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-blue-900  shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  )
}
export default SwitchToggle