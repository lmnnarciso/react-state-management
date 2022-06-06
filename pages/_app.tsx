import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

const routeList = [
  {
    name: "Chapter 4",
    path: "/chapter_04",
    subRoutes: [
      {
        name: "01_naive_solution_to_module_state",
        path: "/01_naive_solution_to_module_state",
      },
      {
        name: "02_use_store_with_subscription",
        path: "/02_use_store_with_subscription",
      },
      {
        name: "03_use_store_with_selector",
        path: "/03_use_store_with_selector",
      },
      {
        name: "04_use_subscription_with_store",
        path: "/04_use_subscription_with_store",
      },
    ],
  },
  {
    name: "Chapter 5",
    path: "/chapter_05",
    subRoutes: [
      {
        name: "01_combine_context_and_subscription",
        path: "/01_combine_context_and_subscription",
      },
    ],
  },
  {
    name: "Chapter 7",
    path: "/chapter_07",
    subRoutes: [
      {
        name: "01_counter_example",
        path: "/01_counter_example",
      },
      {
        name: "02_todo_example",
        path: "/02_todo_example",
      },
    ],
  },
  {
    name: "Chapter 8",
    path: "/chapter_08",
    subRoutes: [
      {
        name: "01_comparison",
        path: "/01_comparison/AppWithContext",
      },
      {
        name: "01_comparisonp2",
        path: "/01_comparison/AppWithJotai",
      },
      {
        name: "02_counter",
        path: "/02_counter",
      },
      {
        name: "03_provider",
        path: "/03_provider",
      },
      {
        name: "04_todo_app_single_atom",
        path: "/04_todo_app_single_atom",
      },
      {
        name: "05_todo_app_atoms_in_atom",
        path: "/05_todo_app_atoms_in_atom",
      },
    ],
  },
  {
    name: "Chapter 9",
    path: "/chapter_09",
    subRoutes: [
      {
        name: "01_counter",
        path: "/01_counter",
      },
      {
        name: "02_todo_app",
        path: "/02_todo_app",
      },
      {
        name: "02_counter",
        path: "/02_counter",
      },
      {
        name: "03_another_todo_app",
        path: "/03_another_todo_app",
      },
    ],
  },
  {
    name: "Chapter 10",
    path: "/chapter_10",
    subRoutes: [
      {
        name: "01_bare_context",
        path: "/01_bare_context",
      },
      {
        name: "02_with_usestate",
        path: "/02_with_usestate",
      },
      {
        name: "03_with_usereducer",
        path: "/03_with_usereducer",
      },
      {
        name: "04_with_reactredux",
        path: "/04_with_reactredux",
      },
    ],
  },
  {
    name: "Chapter 11",
    path: "/chapter_11",
    subRoutes: [
      {
        name: "01_redux_counter",
        path: "/01_redux_counter",
      },
      {
        name: "02_zustand_counter",
        path: "/02_zustand_counter",
      },
      {
        name: "03_recoil_charcounter",
        path: "/03_recoil_charcounter",
      },
      {
        name: "04_jotai_charcounter",
        path: "/04_jotai_charcounter",
      },
      {
        name: "05_mobx_timer",
        path: "/05_mobx_timer",
      },
      {
        name: "06_valtio_timer",
        path: "/06_valtio_timer",
      },
    ],
  },
];
const Nav = () => {
  const routeReduce = routeList.reduce((acc, cur) => {
    let cont;
    const parentPath = cur.path;
    cur.subRoutes.forEach((childItem) => {
      acc[`${parentPath}${childItem.path}`] = `${parentPath}${childItem.path}`;
    });

    return acc;
  }, {});

  console.log({ routeReduce });
  return (
    <nav>
      <ul>
        {Object.keys(routeReduce).map((path) => (
          <li key={path}>
            <Link href={path}>{path}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
