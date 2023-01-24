import React, { useEffect, useState } from "react";
import { getPost, getUsers } from "../modules/sample";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

const SampleContainer = ({ getPost, getUsers, users, post, loading }) => {
  const [number, setNumber] = useState(1);
  const data = useSelector((state) => state.sampleReducer);
  console.log(data);
  useEffect(() => {
    getPost(number);
    getUsers();
  }, [getPost, getUsers, number]);

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div>
      <input type="number" min="1" value={number} onChange={onChange}></input>
      <section>
        {loading.post && "로딩 중"}
        {!loading.post && post && <div>{post.title}</div>}
      </section>
      <hr />
      <section>
        {loading.users && "로딩 중"}
        {!loading.users && users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default connect(
  ({ sampleReducer }) => ({
    post: sampleReducer.post,
    users: sampleReducer.users,
    loading: sampleReducer.loading,
  }),
  {
    getPost,
    getUsers,
  }
)(SampleContainer);
