import ExpressBookingButton from "./components/ExpressBookingButton";
import Header from "./components/Header";
import Layout from "./components/Layout";
import TimeSetter from "./components/TimeSetter";
import { Button } from "./components/ui/button";

function DefaultScreen() {
  return (
    <Layout>
      <div className="flex flex-wrap items-center gap-2 md:flex-column w-full">
        <Header />
        <ExpressBookingButton>1:00</ExpressBookingButton>
        <ExpressBookingButton>2:00</ExpressBookingButton>
        <ExpressBookingButton>3:00</ExpressBookingButton>
      </div>
      <TimeSetter />

      <div className="flex flex-wrap items-center gap-2 md:flex-column w-full justify-end mt-8">
        <Button>Start</Button>
      </div>
    </Layout>
  );
}

function App() {
  return <DefaultScreen />;
}

export default App;
