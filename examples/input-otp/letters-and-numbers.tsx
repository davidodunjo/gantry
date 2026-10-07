import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

function InputOTPLettersAndNumbers() {
  return (
    <div className="flex max-w-md flex-col gap-1.5">
      <label htmlFor="otp-paste" className="text-sm font-medium">
        Access code
      </label>
      <InputOTP
        id="otp-paste"
        controlSize="xxs"
        maxLength={4}
        inputMode="text"
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        pasteTransformer={(text) => text.replace(/[\s-]/g, "")}
        aria-describedby="otp-paste-hint"
      >
        <InputOTPGroup>
          {[0, 1, 2, 3].map((index) => (
            <InputOTPSlot key={index} index={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <p id="otp-paste-hint" className="text-sm text-muted-foreground">
        Paste QR-7B and the dash is dropped on the way in.
      </p>
    </div>
  )
}

export default InputOTPLettersAndNumbers
