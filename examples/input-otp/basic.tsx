import { REGEXP_ONLY_DIGITS } from "input-otp"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

function InputOTPBasic() {
  return (
    <div className="max-w-full overflow-x-auto p-1">
      <InputOTP
        maxLength={4}
        pattern={REGEXP_ONLY_DIGITS}
        aria-label="Four digit code"
      >
        <InputOTPGroup>
          {[0, 1, 2, 3].map((index) => (
            <InputOTPSlot key={index} index={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
    </div>
  )
}

export default InputOTPBasic
