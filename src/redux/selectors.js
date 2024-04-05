export const selectFilterName = state => {
  return state.filters.name;
};

export const selectContactItems = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
