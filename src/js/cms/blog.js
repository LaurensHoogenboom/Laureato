function buildBlogList(blogs) {
    console.log(blogs)

    blogs.forEach((blog) => {
        $('#blog-list').append(
            $('<div>').attr("id", blog.id).addClass('blog').addClass('item')
            .append(
                $("<div>").addClass('actions')
                .append(
                    $("<input>").attr('type', "checkbox").attr("id", `select-${blog.id}`)
                )
                .append(
                    $("<label>").attr('for', `select-${blog.id}`)
                )
            )
            .append(
                $("<label>").text(blog.title).addClass('title')
            )
            .append(
                $("<label>").text(blog.category)
            )
            .append(
                $("<label>").text(blog.submitedOn)
            )
        )
    })
}