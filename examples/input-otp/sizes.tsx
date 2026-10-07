import { REGEXP_ONLY_DIGITS } from "input-otp"

import {
  InputOTP,
  InputOTPGroup,
  type InputOTPProps,
  InputOTPSlot,
} from "@/components/ui/input-otp"

const sizes: NonNullable<InputOTPProps["controlSize"]>[] = [
  "xxxs",
  "xxs",
  "xs",
  "sm",
  "md",
  "lg",
]

function InputOTPSizes() {
  return (
    <div className="flex w-full min-w-0 flex-col gap-6">
      {sizes.map((size) => (
        <div key={size} className="flex min-w-0 flex-col gap-2">
          <p className="text-sm text-muted-foreground">{size}</p>
          <div className="max-w-full overflow-x-auto p-1">
            <InputOTP
              maxLength={4}
              controlSize={size}
              pattern={REGEXP_ONLY_DIGITS}
              aria-label={`Four digit code, ${size}`}
            >
              <InputOTPGroup>
                {[0, 1, 2, 3].map((index) => (
                  <InputOTPSlot key={index} index={index} />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>
      ))}
    </div>
  )
}

export default InputOTPSizes
