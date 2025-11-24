function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
}

async function load() {
  const res = await fetchData();
  console.log(res);
}

load();
