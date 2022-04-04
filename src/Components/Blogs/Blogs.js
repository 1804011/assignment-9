import React from "react";
import "./Blogs.css";
const Blogs = () => {
	return (
		<div className="blogs-container my-4 ">
			<div className="Questions p-6 ">
				<h1 className="text-2xl font-bold italic text-left">
					What is Context API?
				</h1>
				<p className="text-xl font-medium text-left">
					There are many useful hooks in react.Context API is one of
					them.Context Api allows us to share property of the higher level
					elements to lower level elements without props drilling.Props drilling
					is a process in which property of parent share to their children by
					passing props from parent to children.It is a cumbersome process
					because when we need to share property from root to very deepest level
					then props drilling became hectic.So to fix this issues react comes
					with a wonderful solution which is context APi. By using context Api
					we can share property of higher level element to lower level without
					props drilling.To use context api we need to use createContext
					function and userContext.provider and useContext hooks.
				</p>
			</div>
			<div className="Questions p-6 ">
				<h1 className="text-2xl font-bold italic text-left">
					What is Semantic Tag?
				</h1>
				<p className="text-xl font-medium text-left">
					We know that HTML is a markup languaguage which is used for
					structuring the web page.Semantic tag is a useful tag used in
					html.Semantic tag is meaningfull.That means it clearly indicate what
					it does to both developer and browser.for example the following tag
					such as form,table,article,header,footer are example of semantic tag.
					For example if we use the tag 'table' in our code then it clearly
					indicate to both browsers & developers that we are going to describe a
					table here.And when we declare a text as bold then it is clear that
					the text is bold has some importance.But there are some tag in html
					that don''t describe themselves such as div and span.they don't
					describe their contents.
				</p>
			</div>
		</div>
	);
};

export default Blogs;
