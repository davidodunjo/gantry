import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

function InputOTPDisabledReadOnly() {
  return (
    <div className="flex flex-wrap items-start gap-8">
      <div className="flex w-fit flex-col gap-1.5">
        <label htmlFor="otp-disabled" className="text-sm font-medium">
          Disabled
        </label>
        <InputOTP
          id="otp-disabled"
          controlSize="xxs"
          maxLength={4}
          disabled
          defaultValue="8210"
        >
          <InputOTPGroup>
            {[0, 1, 2, 3].map((index) => (
              <InputOTPSlot key={index} index={index} />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div className="flex w-fit flex-col gap-1.5">
        <label htmlFor="otp-read-only" className="text-sm font-medium">
          Read only
        </label>
        <InputOTP
          id="otp-read-only"
          controlSize="xxs"
          maxLength={4}
          readOnly
          value="8210"
        >
          <InputOTPGroup>
            {[0, 1, 2, 3].map((index) => (
              <InputOTPSlot key={index} index={index} />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  )
}

export default InputOTPDisabledReadOnly
