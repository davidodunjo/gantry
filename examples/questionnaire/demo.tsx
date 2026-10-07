import { useState, type FormEvent } from "react"

import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"

function QuestionnaireDemo() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <output className="block text-sm">
        Thanks. Your team lead will follow up this week.
      </output>
    )
  }

  return (
    <div className="w-full max-w-lg">
      <Questionnaire shortcuts="letters" onSubmit={handleSubmit}>
        <QuestionnaireProgress />
        <QuestionnaireItem name="team" required>
          <QuestionnaireTitle>Which team are you on?</QuestionnaireTitle>
          <QuestionnaireDescription>
            Pick the one you spend the most time with.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="design">
              Design
              <QuestionnaireChoiceDescription>
                Product design and research
              </QuestionnaireChoiceDescription>
            </QuestionnaireChoice>
            <QuestionnaireChoice value="engineering">
              Engineering
              <QuestionnaireChoiceDescription>
                Building and shipping
              </QuestionnaireChoiceDescription>
            </QuestionnaireChoice>
            <QuestionnaireChoice value="product">
              Product
              <QuestionnaireChoiceDescription>
                Strategy and roadmap
              </QuestionnaireChoiceDescription>
            </QuestionnaireChoice>
            <QuestionnaireChoice value="sales" disabled>
              Sales (coming soon)
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError>Pick a team to continue.</QuestionnaireError>
        </QuestionnaireItem>
        <QuestionnaireItem name="tools" multiple>
          <QuestionnaireTitle>
            Which tools do you use day to day?
          </QuestionnaireTitle>
          <QuestionnaireDescription>
            Select as many as apply.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="figma">Figma</QuestionnaireChoice>
            <QuestionnaireChoice value="linear">Linear</QuestionnaireChoice>
            <QuestionnaireChoice value="notion">Notion</QuestionnaireChoice>
            <QuestionnaireChoice value="slack">Slack</QuestionnaireChoice>
          </QuestionnaireChoices>
        </QuestionnaireItem>
        <QuestionnaireItem name="notes">
          <QuestionnaireTitle>Anything you want us to know?</QuestionnaireTitle>
          <QuestionnaireInput
            aria-label="Additional notes"
            placeholder="Optional, but we read every one"
          />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireSkip />
          <QuestionnaireNext />
          <QuestionnaireSubmit />
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  )
}

export default QuestionnaireDemo
