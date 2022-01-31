const chartReducer = (state, { type, payload }) => {
  const { items, activeItemIndex, graphDataItems } = state;
  const activeItem = items[activeItemIndex];

  switch (type) {
    case 'show_prev':
      return {
        ...state,
        prevGraphState: [...graphDataItems[activeItem.id]],
        activeItemIndex:
          activeItemIndex === 0 ? items.length - 1 : activeItemIndex - 1,
      };
    case 'show_next':
      return {
        ...state,
        prevGraphState: [...graphDataItems[activeItem.id]],
        activeItemIndex:
          activeItemIndex === items.length - 1 ? 0 : activeItemIndex + 1,
      };
    case 'loading_start':
      return {
        ...state,
        isLoading: true,
      };
    case 'loading_success':
      return {
        ...state,
        graphDataItems: { ...graphDataItems, [activeItem.id]: payload },
        isLoading: false,
      };
    default:
      throw new Error();
  }
};

export default chartReducer;
