import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { MdOutlineFavoriteBorder, MdLanguage } from 'react-icons/md'
import { HiOutlineTrash } from 'react-icons/hi'
import { TbGitFork } from 'react-icons/tb'
export async function getServerSideProps(context) {
    const res = await fetch('https://api.github.com/users/chenelias/repos', {
        headers: {
            Authorization: 'token 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',
        },
    })
    const usr = await fetch('https://api.github.com/users/chenelias', {
        headers: {
            Authorization: 'token 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',
        },
    })
    const data = await res.json()
    const user = await usr.json()
    return {
        props: { data, user },
    }
}
const index = ({ data, user }) => {
    const [focusSearch, setFocusSearch] = useState(false)
    const [repoSearch, setRepoSearch] = useState('')
    const [searchvalue, setsearchvalue] = useState()
    function InputonChange(x) {
        setRepoSearch(x)
        setFocusSearch(x != '' ? true : false)
    }
    function clearicon() {
        setRepoSearch('')
        document.querySelector('.RepoSearchInput').value = ''
    }
    return (
        <main>
            <Head>
                <title>EliasChen - Projects</title>
            </Head>
            <div className=" items-center">
                <h1 className="font-extrabold text-6xl tracking-tight">Projects</h1>
                <div className="flex items-center mt-4">
                    <p className="text-lg ">
                        <span className="font-bold">{data.length}</span>&thinsp;/&thinsp;Project
                    </p>
                    <span>&ensp;&bull;&ensp;</span>
                    <p className="flex items-center text-lg">
                        <AiFillGithub />
                        Follower&thinsp;/&thinsp;<span>{user.followers}</span>
                    </p>
                </div>
                {/* <div className="flex-1"></div>
                <div className="flex">
                    <button></button><button></button>
                </div> */}
            </div>
            <div class="relative w-full mt-6">
                <input
                    onChange={(x) => InputonChange(x.target.value)}
                    aria-label="Search projects"
                    type="text"
                    placeholder="Search projects"
                    className="RepoSearchInput block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
                />
                <div className=" absolute right-0 h-[41px] top-0 py-[8px] rounded-md flex items-center">
                    {repoSearch !== '' ? (
                        <button
                            className="mr-[4px] text-red-600 p-[1px] text-[27px] dark:hover:bg-slate-700 rounded-md hover:bg-slate-200 transition-all"
                            onClick={() => clearicon()}
                        >
                            <span className="">
                                <HiOutlineTrash />
                            </span>
                        </button>
                    ) : (
                        ''
                    )}
                    <svg
                        class="h-[25px] w-[25px] mr-2 text-gray-400 dark:text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                </div>
            </div>
            <div className="mt-10">
                {/* <h1 className="text-3xl ">Recent Update</h1> */}
                <div>
                    {data
                        .sort((a, b) => (a.pushed_at < b.pushed_at ? 1 : -1))
                        .filter(
                            (repo) =>
                                repo.name.toUpperCase().includes(repoSearch) ||
                                repo.name.toLowerCase().includes(repoSearch) 
                        )
                        .map((repo) => (
                            <Link className="group cursor-pointer block" target="_blank" href={repo.html_url}>
                                <div className="border flex transform hover:scale-[1.01] transition-all w-full w-max-xl p-3 my-4 rounded-lg bg-gradient-to-r dark:from-gray-800 dark:to-slate-600 from-slate-300 to-gray-400 break-words">
                                    <div className="block">
                                        <div className="flex">
                                            <p className="items-center text-xl flex mr-1">
                                                <AiFillGithub />
                                            </p>
                                            <h1 className="font-light text-md">{repo.full_name}</h1>
                                        </div>
                                        <h1 className="font-bold !block text-3xl group-hover:underline">{repo.name}</h1>
                                        <p className="text-md font-light">{repo.description}</p>
                                        <div className="flex p-1 items-center">
                                            <p className="items-center mr-3 font-bold text-lg flex">
                                                <TbGitFork />
                                                &thinsp;{repo.forks_count}
                                            </p>
                                            <p className="items-center mr-3 font-bold text-lg flex">
                                                <MdOutlineFavoriteBorder />
                                                &thinsp;{repo.stargazers_count}
                                            </p>
                                            {repo.language && (
                                                <p className=" items-center font-bold text-md flex">
                                                    <MdLanguage />
                                                    &thinsp;
                                                    {repo.language}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex-1"></div>
                                    <div className="items-center block"></div>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </main>
    )
}

export default index
