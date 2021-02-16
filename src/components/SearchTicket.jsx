import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useState } from "react";

const SearchTicket = () => {
  const [flightDate, setFlight] = useState();
  const [returns, setReturns] = useState(false);

  return (
    <div className="bg-white shadow-xl py-8 rounded-lg px-6 relative -mt-20 ">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-12">
        <div className="col-span-4 border border-gray-300 rounded-md p-4 group-focus:border-black">
          <p className="font-semibold text-sm">FROM</p>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Kota"
              className="w-full py-1 text-3xl font-bold    focus:outline-none"
            />
          </div>
          <p className="font-semibold">BHN, Bandung, Jawa Barat</p>
        </div>
        <div className="col-span-4 border border-gray-300 rounded-md p-4 group-focus:border-black">
          <p className="font-semibold text-sm">FROM</p>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Kota"
              className="w-full py-1 text-3xl font-bold    focus:outline-none"
            />
          </div>
          <p className="font-semibold">BHN, Bandung, Jawa Barat</p>
        </div>
        <div className="col-span-4 border border-gray-300 rounded-md p-4 group-focus:border-black">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="font-semibold text-sm">DEPARTURE</p>
                <div className="input-wrapper">
                  {/* <input
                  type="date"
                  placeholder="Kota"
                  className="w-full py-1 text-3xl font-bold    focus:outline-none"
                /> */}
                  <DatePicker
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={flightDate}
                    onChange={(date) => setFlight(date)}
                  />
                </div>
              </div>
              <div>
                <label
                  className="font-semibold text-sm inline-block"
                  htmlFor="return"
                >
                  RETURN
                </label>
                <input
                  type="checkbox"
                  className="inline-block focus:outline-none ml-2"
                  id="return"
                  value={returns}
                  onChange={() => setReturns(!returns)}
                />
                <div className="input-wrapper">
                  <DatePicker
                    disabled={returns}
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={flightDate}
                    onChange={(date) => setFlight(date)}
                  />
                </div>
              </div>
            </div>
          </MuiPickersUtilsProvider>
        </div>
      </div>
    </div>
  );
};

export default SearchTicket;
