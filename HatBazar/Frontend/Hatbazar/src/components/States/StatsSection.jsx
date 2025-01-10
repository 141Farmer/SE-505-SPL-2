import React from "react";
import StatItem from "./StatesItem";

const Stats = ({statsData}) => (
    <section className="bg-green-700 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {statsData.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );

export default Stats;