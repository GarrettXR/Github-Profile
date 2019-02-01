import React, { Component } from 'react'
import { getRepos, getProfile } from '../actions/github'
import { connect } from 'react-redux'
import 'font-awesome/css/font-awesome.css'
import "../styles/App.css"

class Repos extends Component {
componentDidMount() {
    getRepos()
    getProfile()
}

render() {
    return (
        <div>
            <div id="tabBox">
                <div><h3 className="tabs">Overview</h3></div>
                <div id="reaps"><h3 id="repos">Repositories</h3><h3 className="tab">{this.props.profile.public_repos}</h3></div>
                <div><h3 className="tabs">Stars</h3></div>
                <div><h3 className="tabs">Followers {this.props.profile.followers}</h3></div>
                <div><h3 className="tabs">Following {this.props.profile.following}</h3></div>
            </div>
            <form>
                <input type="text" name="search" placeholder="Find a repository..." />
                <select id="select1" name="type">
                    <option value="All">All</option>
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                    <option value="Sources">Sources</option>
                    <option value="Forks">Forks</option>
                    <options value="Archived">Archived</options>
                    <option value="Mirrors">Mirrors</option>
                </select>
                <select id="select2" name="Language">
                    <option value="All">All</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="HTML">HTML</option>
                </select>
                <button><i class="fa fa-book"></i>New</button>
            </form>
            <ul>
            {this.props.repos.map(repo => (
                <li className="repoList" key={ + repo.id}>
                        <div>
                            <p id="nam">{repo.name}</p>
                            <p id="lang">{repo.language}</p>
                            <p>{repo.updated_at}</p>
                        </div>
                </li>
            ))}
            </ul>
        </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        repos: appState.githubReducer.repos,
        profile: appState.githubReducer.profile
    }
}


export default connect(mapStateToProps)(Repos)