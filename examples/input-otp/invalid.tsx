import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

function InputOTPInvalid() {
  return (
    <div className="flex max-w-md flex-col gap-1.5">
      <label htmlFor="otp-invalid" className="text-sm font-medium">
        Verification code
      </label>
      <InputOTP
        id="otp-invalid"
        controlSize="xxs"
        maxLength={4}
        defaultValue="8210"
        aria-invalid="true"
        aria-describedby="otp-invalid-error"
      >
        <InputOTPGroup>
          {[0, 1, 2, 3].map((index) => (
            <InputOTPSlot key={index} index={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <p id="otp-invalid-error" className="text-sm text-destructive">
        That code expired. Ask for a new one.
      </p>
    </div>
  )
}

export default InputOTPInvalid
