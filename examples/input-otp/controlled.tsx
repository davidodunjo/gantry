import { useState } from "react"
import { REGEXP_ONLY_DIGITS } from "input-otp"

import { Button } from "@/components/ui/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

function InputOTPControlled() {
  const [code, setCode] = useState("")

  function handleClear() {
    setCode("")
  }

  return (
    <div className="flex max-w-md flex-col gap-1.5">
      <label htmlFor="otp-controlled" className="text-sm font-medium">
        Confirmation code
      </label>
      <InputOTP
        id="otp-controlled"
        maxLength={4}
        value={code}
        onChange={setCode}
        pattern={REGEXP_ONLY_DIGITS}
        aria-describedby="otp-controlled-count"
      >
        <InputOTPGroup>
          {[0, 1, 2, 3].map((index) => (
            <InputOTPSlot key={index} index={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <output
        id="otp-controlled-count"
        className="text-sm text-muted-foreground"
      >
        {code.length === 4
          ? "Code complete."
          : `${code.length} of 4 digits entered.`}
      </output>
      <Button
        variant="outline"
        className="w-fit"
        disabled={code.length === 0}
        onClick={handleClear}
      >
        Clear
      </Button>
    </div>
  )
}

export default InputOTPControlled
