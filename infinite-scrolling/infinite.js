const imagesList = [
  "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1498336179775-9836baef8fdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1472053092455-ee16a8b358b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://i.ytimg.com/vi/SQJrYw1QvSQ/maxresdefault.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cat-quotes-1543599392.jpg?crop=1.00xw:0.759xh;0,0&resize=480:*",
  "https://static.boredpanda.com/blog/wp-content/uploads/2020/02/cat-daily-life-photo-coverimage.jpg",
  "https://img.xshoppy.shop/uploader/9adec9a3fd77d04a1953ac47954f4a171424c302.jpg",
];

const $infinityContainer = document.querySelector("#infinity-list");
var index = 1;

const loadMore = () => {
  for (let i = 0; i < 20; i++) {
    const item = document.createElement("li");
    item.textContent = `Item ${index}`;
    index++;
    $infinityContainer.append(item);
  }
};

const loadImages = () => {
  for (let i = 0; i < 5; i++) {
    let ind = Math.floor(Math.random() * 9);
    const post = document.createElement("div");
    post.setAttribute("class", "post");
    const heading = document.createElement("h3");
    heading.textContent = `Item ${index}`;
    const image = document.createElement("img");
    image.setAttribute("src", imagesList[ind]);
    post.append(heading);
    post.append(image);
    $infinityContainer.append(post);
    index++;
  }
};

$infinityContainer.addEventListener("scroll", (e) => {
  if (
    $infinityContainer.scrollTop + $infinityContainer.clientHeight >=
    $infinityContainer.scrollHeight
  )
    loadImages();
  // loadMore()
});

loadImages();
