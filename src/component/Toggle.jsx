import  { useState } from 'react'

const Toggle = (props) => {
  console.log(props);
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center '>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          onClick={props.change}
          className='sr-only'
        />
        <span className={isChecked?'label flex items-center text-sm font-medium text-black':'label flex items-center text-sm font-medium  text-white'}>
          Dark
        </span>
        <span
          className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            isChecked ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
              isChecked ? 'translate-x-[28px]' : ''
            }`}
          ></span>
        </span>
        <span className={isChecked?'label flex items-center text-sm  font-medium text-black':'label flex items-center text-sm text-white font-medium'}>
          light
        </span>
      </label>
    </>
  )
}

export default Toggle
