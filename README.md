# Nike Website

- **This is a Content Management System(CMS) of NIKE using React and tailwind.
- This uses tailwind version 3.1 which uses config site and we are using special component as utilities
- We place all the exports in the index.js to keep code clean and this exports directly from the folder since its index.js
- In a folder it looks for package.json then for main and after if index.js which is its modular path.
- Using clean architecture and building `npm run build` to get dist folder

# CSS:-
- Here we are using tailwind for css to give clean and fast.
- **We are also using dynamically changing css in case of cards and using index.css as well as config file.

```
<div className={`border-2 rounded-xl ${bigShoeImg===imgUrl?'border-coral-red':'border-transparent'}`}>
</div>
```
- we are using useState hook to do the image change for the functioning of the image change.
- Using apply for using premade tailwind css to use.


# Phases:-
- ***Sections: each of the major of the page has a seperate in this we export them all form the index.js file.
- **Components: each of the component used like button, cards are stored here.
- This is used for reusability of the component. 
- **Constant: For storing the data which we can later import from and map the constant data so its clean code for use.
- **assets: This is where all the assets like image /icons are stored and with index.js in it these exports all images together for cleaner coding.