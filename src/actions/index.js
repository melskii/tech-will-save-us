export const CLASSIFY_TEXT = 'CLASSIFY_TEXT';
export const SAVE_STORY = 'SAVE_STORY';



//Actions must be a plain JS object and a type property, may have an error, payload and meta property
export function classifyText(storytext) {

  return {
    type: CLASSIFY_TEXT,
    payload: {
      storytext: storytext
    }
  }
}


export function saveStory(story) {

    return {
      type: SAVE_STORY,
      payload: {
        storytext: story.storytext,
        genre: story.genre,
        img: story.img,
      }
    }

}
