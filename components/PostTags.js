function PostTags({ tags }) {
  return (
    <div>
      {tags.length ? (
        <small className="text-secondary row mb-3 ps-3">tags:</small>
      ) : null}

      {tags.map((tag) => (
        <span
          className="btn btn-sm btn-dark link text-light rounded ms-1"
          key={tag.name}
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
}

export default PostTags;
