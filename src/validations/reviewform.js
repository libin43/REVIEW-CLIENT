export const reviewFormValidation = (formData) =>{
    const {
        appUsage,
        selectedGoals,
        userExperience,
        improvements,
        birthday,
      } = formData;
      if (
        appUsage !== '' &&
        selectedGoals.length > 0 &&
        userExperience !== null &&
        improvements !== '' &&
        birthday !== null
      ) {
        return true
      }
    
      return false
}