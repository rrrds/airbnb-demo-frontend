export const kindToText = {
  entire_home: 'Entire home',
  private_room: 'Private room',
  shared_room: 'Shared room',
};

export const transformHomeData = inData => ({
  text: inData.name,
  image: inData.images[0].picture,
  price: inData.price,
  stars: inData.rating,
  beds: inData.bedsCount,
  type: inData.kind,
  reviewsCount: inData.reviewsCount,
  isSuperhost: inData.isSuperhost,
});
