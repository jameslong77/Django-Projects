export const DONE_LOADING = 'DONE_LOADING'
export const TALK_SELECTED = 'TALK_SELECTED'

export function doneLoading() {
  return {
    type: DONE_LOADING
  }
}

export function talkSelected(talk) {
  return {
    type: TALK_SELECTED,
    talk
  }
}
