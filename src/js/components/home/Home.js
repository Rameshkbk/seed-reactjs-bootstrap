import React, { PropTypes } from 'react'
import { Table, Panel, PageHeader } from 'react-bootstrap'
import { Link } from 'react-router'
import { connect } from "react-redux";
import { fetchGithub } from "../../actions/githubActions";

@connect((store) => {
  return {
    repo: store.github.data,
    fetching: store.github.fetching,
    fetched: store.github.fetched
  };
})
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchGithub());
  }
  render () {
    const repo = this.props.repo;
    return(
      <div className="container">
         <PageHeader>Github Repo Details </PageHeader>
            <Table >
              <tr>
                <td>Repo : </td>
                <td>{repo.name} </td>
              </tr>
              <tr>
                <td>Blog : </td>
                <td>{repo.blog} </td>
              </tr>
              <tr>
                <td>Url : </td>
                <td>{repo.html_url} </td>
              </tr>
            </Table>
      </div>
    );
  }
}

export default Home;
