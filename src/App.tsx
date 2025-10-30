import ExpressBookingButton from "./components/ExpressBookingButton";
import Header from "./components/Header";
import Layout from "./components/Layout";

function DefaultScreen() {
  return (
    <Layout>
      <div className="flex flex-wrap items-center gap-2 md:flex-column w-full">
        <Header />
        <ExpressBookingButton>1:00</ExpressBookingButton>
        <ExpressBookingButton>2:00</ExpressBookingButton>
        <ExpressBookingButton>3:00</ExpressBookingButton>
      </div>
    </Layout>
  );
}

function App() {
  return <DefaultScreen />;
}

export default App;
