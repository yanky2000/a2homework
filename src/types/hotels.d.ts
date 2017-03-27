type Hotel = {
  id: number,
  name: string,
  imageUrl: string,
  imageUrl2: string,
  location: {
    address: string,
    city: string,
  },
  activityType: string,
  tel: string,
  weather: {
    temperature: number,
    water: number
  },
  likes: number,
  followers: number,
  stars: number
};
