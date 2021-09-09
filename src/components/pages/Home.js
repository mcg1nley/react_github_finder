import React, { Fragment } from "react";
import Search from "../users/Search";
import Users from "../users/Users";

const Home = () => {
  const { users, loading } = this.state;
  return (
    <Fragment>
      <Search
        searchUsers={this.searchUsers}
        clearUsers={this.clearUsers}
        showClear={users.length > 0 ? true : false}
        setAlert={this.setAlert}
      />
      <Users loading={loading} users={users} />
    </Fragment>
  );
};

export default Home;
