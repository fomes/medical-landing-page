"use client";

import { phoneDDI } from "@/utils/masks";
import { useState } from "react";

export function SectionAppointment() {
  const [phone, setPhone] = useState("");

  return (
    <section className="appointment section">
      <div className="container mx-auto">
        <h2 className="appointment__title h2 mb-5 xl:mb-[50px] text-center xl:text-left">
          Book Appointment or call:{" "}
          <span className="text-accent-tertiary">(+487) 384 9452</span>
        </h2>

        <form action="#" className="appointment__form flex flex-col gap-y-5">
          <div className="flex flex-col xl:flex-row gap-5">
            <div className="select flex items-center">
              <select
                className="appearance-none outline-none w-full bg-transparent px-4"
                name="departament"
              >
                <option value="1">Select Departament</option>
                <option value="2">Departament 1</option>
                <option value="3">Departament 2</option>
                <option value="4">Departament 3</option>
              </select>
            </div>

            <div className="select realtive flex items-center">
              <select
                className="appearance-none outline-none w-full bg-transparent px-4"
                name="doctor"
              >
                <option value="1">Select Doctor</option>
                <option value="2">Dr Jon Doe</option>
                <option value="3">Dr Jone Doe</option>
                <option value="4">Dr Bob Doe</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row gap-5">
            <input
              name="full-name"
              type="text"
              className="input"
              placeholder="Full name"
              autoComplete="on"
            />
            <input
              name="phone"
              type="text"
              className="input"
              placeholder="Phone Number"
              autoComplete="on"
              value={phoneDDI(phone)}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="flex flex-col xl:flex-row gap-5">
            <input name="date" type="date" className="input" />
            <input name="time" type="time" className="input" />
          </div>

          <button className="btn btn-lg btn-accent self-start" type="submit">
            Book an appointment
          </button>
        </form>
      </div>
    </section>
  );
}
