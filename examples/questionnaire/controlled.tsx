import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
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

function QuestionnaireControlled() {
  const [item, setItem] = useState("score")

  function handleJumpToScore() {
    setItem("score")
  }

  function handleJumpToReason() {
    setItem("reason")
  }

  return (
    <div className="w-full max-w-lg">
      <div className="flex w-full flex-col gap-4">
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={handleJumpToScore}>
            Jump to score
          </Button>
          <Button size="sm" variant="outline" onClick={handleJumpToReason}>
            Jump to reason
          </Button>
        </div>
        <Questionnaire item={item} onItemChange={setItem}>
          <QuestionnaireProgress />
          <QuestionnaireItem name="score" required>
            <QuestionnaireTitle>
              How likely are you to recommend us to a colleague?
            </QuestionnaireTitle>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="not-likely">
                Not likely
              </QuestionnaireChoice>
              <QuestionnaireChoice value="neutral">Neutral</QuestionnaireChoice>
              <QuestionnaireChoice value="very-likely">
                Very likely
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireError>Pick a score to continue.</QuestionnaireError>
          </QuestionnaireItem>
          <QuestionnaireItem name="reason">
            <QuestionnaireTitle>
              What is the main reason for that score?
            </QuestionnaireTitle>
            <QuestionnaireInput
              aria-label="Reason for your score"
              placeholder="Tell us what stood out"
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
    </div>
  )
}

export default QuestionnaireControlled
