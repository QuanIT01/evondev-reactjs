//import { useState } from "react";
import { Fragment } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import GameWithReducer from "../components/tictactoe/GameWithReducer";
import Tooltip from "./components/Tooltip";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="p-5 bg-red-100">
      <p className="text-red-600">Không thể lấy dât do component đang lỗi</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
//import DropdownPortal from "./components/DropdownPortal";
//import SignUpFormFinal from "./components/form/SignUpFormFinal";
//import SignUpFormHook from "./components/form/SignUpFormHook";
//import Modal from "./components/modal/Modal";

//import SignUpFormHook from "./components/form/SignUpFormHook";

//import MovieSearchApp from "./components/MovieSearchApp";

//import SidebarMenu from "./components/SidebarMenu";
//import useClickOutSide from "./hooks/useClickOutSide";

//import { GlobalStyles } from "./GlobalStyles";
//import { ThemeProvider } from "styled-components";
//import YoutubeList from "./components/youtube/YoutubeList";
//const theme = {
//colors: {
//   blue: "#2979ff",
// },
//};

// link Active Link  Outlet  Nested routes useParams useSerachParams NotFound useNavigate   ==>context
function App() {
  // const { show, setShow, nodeRef } = useClickOutSide("span");
  //const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      {/**  <ThemeProvider theme={theme}></ThemeProvider>*/}
      {/**  <GlobalStyles></GlobalStyles>*/}
      {/*} <span
        onClick={() => setShow(true)}
        className="inline-block p-3 m-3 text-white bg-green-400 rounded-lg cursor-pointer"
      >
        Show menu
      </span>
      <SidebarMenu show={show} ref={nodeRef}></SidebarMenu>*/}
      {/*   <SignUpFormFinal></SignUpFormFinal>*/}
      {/*  <div>
        <Modal open={showModal} handleClose={() => setShowModal(false)}></Modal>
      </div>
      <button
        className="p-4 m-5 text-white bg-blue-500 rounded-md"
        onClick={() => setShowModal(true)}
      >
        Show modal
      </button>
      <div className="relative z-30">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At consequatur
        ex, veniam amet hic quo dolor accusantium laborum debitis molestiae
        suscipit vero repellat voluptas enim possimus iure tenetur a officia.
      </div>
      <div className="p-5 overflow-hidden">
        <DropdownPortal></DropdownPortal>
      </div> */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <GameWithReducer></GameWithReducer>
      </ErrorBoundary>

      <div className="p-16 mt-16 ml-16">
        <Tooltip text="Hover me">This is a tooltip content</Tooltip>
      </div>
    </Fragment>
    //Modal
    /**
     * const [openModalBase, setOpenModalBase] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen p-5">
      <button
        className="p-5 text-center text-white bg-blue-400 rounded-lg"
        onClick={() => setOpenModalBase(true)}
      >
        Open Modal Base
      </button>
      <button
        className="p-5 ml-5 text-center text-white bg-blue-400 rounded-lg"
        onClick={() => setOpenModal(true)}
      >
        Open Modal
      </button>
      <ModalBase
        visible={openModalBase}
        onClose={() => setOpenModalBase(false)}
      >
        <div className="p-10 bg-white rounded-lg w-full max-w-[320px]">
          <TooltipAdvanced title="Tooltip2">This is tooltip2</TooltipAdvanced>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          perspiciatis tenetur eaque et dignissimos illum nemo consequatur
          molestias velit exercitationem aut veniam numquam, dolores quibusdam
          ipsam aperiam debitis molestiae optio.
        </div>
      </ModalBase>
      <ModalAdvanced
        visible={openModal}
        onClose={() => setOpenModal(false)}
        heading="Welcome Back!"
        bodyClassName="w-full max-w-[400px] bg-white p-10 rounded-lg"
      >
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="email" className="text-sm cursor-pointer">
            Email address
          </label>
          <input
            type="email"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your mail"
          />
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="password" className="text-sm cursor-pointer">
            Password
          </label>
          <input
            type="text"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full p-4 font-semibold text-base text-white bg-[#316BFF] rounded-lg">
          Sign in
        </button>
      </ModalAdvanced>
      <div className="inline-block ml-5">
        <TooltipAdvanced title="Tooltip">This is a tooltip</TooltipAdvanced>
      </div>
    </div>
  );
     */
  );
}

/**context

/*function CountDisplay() {
  const [count] = useCount();
  return <div>The count is: {count}</div>;
}

function Counter() {
  const [, setCount] = useCount();
  const increment = () => setCount((c) => c + 1);
  return (
    <button
      onClick={increment}
      className="p-4 font-semibold text-white bg-purple-500 rounded-lg"
    >
      Increment count
    </button>
  );
}

const App = () => {
  return (
    <Fragment>
      {/*<div className="flex items-center justify-center p-5 gap-x-5">
      <CountProvider>
        <CountDisplay></CountDisplay>
        <Counter></Counter>
      </CountProvider>
  </div>*\}
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
          <CartList></CartList>
        </GalleryProvider>
      </AuthProvider>
    </Fragment>
  );
};
//export default App;
*/
/*render props
      <Title
        render={() => {
          return <h1>hello from render props</h1>;
        }}
      ></Title>*/
/*//compound component
      <Accordion header="Can I become FrontEnd DEveloper">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          fugiat in sint ea suscipit ipsam ipsa fuga. Dignissimos neque
          voluptate praesentium minus culpa cumque tempore inventore vero!
          Repellat, possimus culpa.
        </div>
      </Accordion>
      <Accordion header="Can I change my flan later">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          fugiat in sint ea suscipit ipsam ipsa fuga. Dignissimos neque
          voluptate praesentium minus culpa cumque tempore inventore vero!
          Repellat, possimus culpa.
        </div>
      </Accordion>*/
export default App;
