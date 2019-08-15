export function handleAppList(list = []) {
  if (!list || !Array.isArray(list) || list.length === 0) return [];
  return list.map(item => {
    let random = Math.floor(Math.random() * 100);
    let stars = Math.ceil(random / 20);
    return {
      name: item["im:name"]["label"],
      image: item["im:image"][1]["label"],
      category: item["category"]["attributes"]["label"],
      stars,
      comments: random
    };
  });
}

export function handleRecommendList(list = []) {
  if (!list || !Array.isArray(list) || list.length === 0) return [];
  return list.map(item => {
    return {
      name: item["im:name"]["label"],
      image: item["im:image"][2]["label"],
      category: item["category"]["attributes"]["label"]
    };
  });
}
