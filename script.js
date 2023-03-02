const loadCategories=async()=>{
    const url=`https://openapi.programming-hero.com/api/news/categories`;
    const res=await fetch(url);
    const data=await res.json();
    displayCategories(data.data);
}

loadCategories();

const displayCategories=(data)=>{
    // console.log(data);
    const categoriesContainer=document.getElementById('categories-container');
    data.news_category.forEach((singleCategory)=>{
        // console.log(singleCategory);
        const linkContainer=document.createElement('p');
        linkContainer.innerHTML=`
        <a class="navbar-brand" href="#" onclick="categoryNews('${singleCategory.category_id}','${singleCategory.category_name}')">${singleCategory.category_name}</a>
        `
        categoriesContainer.appendChild(linkContainer)
    }) 
}

const categoryNews=async(category_id,category_name)=>{
    const url=`https://openapi.programming-hero.com/api/news/category/${category_id}`;
    const res=await fetch(url);
    const data=await res.json();
    showAllNews(data,category_name);
}

const showAllNews=(data,category_name)=>{
    console.log(data.data,category_name);
    document.getElementById('news_count').innerText=data.data.length;
    document.getElementById('category_name').innerText=category_name;
}