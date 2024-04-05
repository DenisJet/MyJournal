export const INITIAL_STATE = {
  isValid: {
    title: true,
    date: true,
    text: true,
  },
  values: {
    text: undefined,
    title: undefined,
    date: undefined,
  },
  isFormReadyToSubmit: false,
}

export function formReducer(state, action) {
  switch(action.type) {
    case 'RESET_VALIDITY':
      return {...state, isValid: INITIAL_STATE.isValid}
    case "SUBMIT": {
      const titleValidity = action.payload.title?.trim().length;
      const dateValidity = action.payload.date;
      const textValidity = action.payload.text?.trim().length;
      return {
        values: action.payload,
        isValid: {
          title: titleValidity,
          date: dateValidity,
          text: textValidity,
        },
        isFormReadyToSubmit: titleValidity && dateValidity && textValidity,
      }
    }  
  }
}