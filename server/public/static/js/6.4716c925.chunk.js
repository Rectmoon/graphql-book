(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[6],{92:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"e",(function(){return m})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return f}));var r=n(93),a=n(41),i=n.n(a);function o(){var e=Object(r.a)(["\n  query book($bookId: String) {\n    book(id: $bookId) {\n      _id\n      isbn\n      title\n      author\n      description\n      published_year\n      publisher\n      updated_date\n    }\n  }\n"]);return o=function(){return e},e}function l(){var e=Object(r.a)(["\n  {\n    books {\n      _id\n      title\n      author\n    }\n  }\n"]);return l=function(){return e},e}function u(){var e=Object(r.a)(["\n  mutation updateBook(\n    $id: String!\n    $isbn: String!\n    $title: String!\n    $author: String!\n    $description: String!\n    $publisher: String!\n    $published_year: Int!\n  ) {\n    updateBook(\n      id: $id\n      isbn: $isbn\n      title: $title\n      author: $author\n      description: $description\n      publisher: $publisher\n      published_year: $published_year\n    ) {\n      updated_date\n    }\n  }\n"]);return u=function(){return e},e}function c(){var e=Object(r.a)(["\n  mutation removeBook($id: String!) {\n    removeBook(id: $id) {\n      _id\n    }\n  }\n"]);return c=function(){return e},e}function s(){var e=Object(r.a)(["\n  mutation AddBook(\n    $isbn: String!\n    $title: String!\n    $author: String!\n    $description: String!\n    $publisher: String!\n    $published_year: Int!\n  ) {\n    addBook(\n      isbn: $isbn\n      title: $title\n      author: $author\n      description: $description\n      publisher: $publisher\n      published_year: $published_year\n    ) {\n      _id\n    }\n  }\n"]);return s=function(){return e},e}var d=i()(s()),b=i()(c()),m=i()(u()),p=i()(l()),f=i()(o())},97:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(19),o=n(35),l=n(100),u=n(92),c=n(102);t.default=function(){var e=Object(i.e)(),t=Object(i.f)().id,n={},r=t?u.e:u.a,s=t?"UPDATE BOOK":"ADD BOOK",d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{book:{}},i=t.book,u=i._id,d=i.isbn,b=i.title,m=i.author,p=i.description,f=i.published_year,h=i.publisher;return a.a.createElement(l.a,{mutation:r,onCompleted:function(){return e.push("/")}},(function(e,t){t.loading,t.error;return a.a.createElement(c.a,null,a.a.createElement(c.a.Header,null,s,a.a.createElement("h4",{className:"fr"},a.a.createElement(o.b,{to:"/"},"Book List"))),a.a.createElement(c.a.Body,null,a.a.createElement("form",{onSubmit:function(t){t.preventDefault();var r=Object.keys(n).reduce((function(e,t){return e[t]=n[t].value,e}),{});r.published_year=~~r.published_year,u&&(r.id=u),e({variables:r}),Object.keys(n).forEach((function(e){n[e]=""}))}},a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"isbn"},"ISBN:"),a.a.createElement("input",{type:"text",className:"form-control",name:"isbn",placeholder:"ISBN",defaultValue:d,ref:function(e){n.isbn=e}})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"title"},"Title:"),a.a.createElement("input",{type:"text",className:"form-control",name:"title",placeholder:"Title",defaultValue:b,ref:function(e){n.title=e}})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"author"},"Author:"),a.a.createElement("input",{type:"text",className:"form-control",name:"author",placeholder:"Author",defaultValue:m,ref:function(e){n.author=e}})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"description"},"Description:"),a.a.createElement("textarea",{className:"form-control",name:"description",placeholder:"Description",cols:"80",rows:"3",defaultValue:p,ref:function(e){n.description=e}})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"publisher"},"Publisher:"),a.a.createElement("input",{type:"text",className:"form-control",name:"publisher",placeholder:"Publisher",defaultValue:h,ref:function(e){n.publisher=e}})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"published_year"},"Published Year:"),a.a.createElement("input",{type:"text",className:"form-control",name:"published_year",placeholder:"Published Year",defaultValue:f,ref:function(e){n.published_year=e}})),a.a.createElement("button",{type:"submit",className:"btn btn-success"},"Submit"))))}))};return t?a.a.createElement(l.b,{query:u.c,variables:{bookId:t}},(function(e){var t=e.loading,n=e.error,r=e.data;return t?"Loading...":n?"Error! ".concat(n.message):d(r)})):d()}}}]);
//# sourceMappingURL=6.4716c925.chunk.js.map