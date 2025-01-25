import React from "react";
import FeatureCard from "./FeatureCard";

const Features = ({featureData}) => (
    <div className="grid md:grid-cols-3 gap-8">
      {featureData.map((feature) => (
        <div id={feature.id} key={feature.id}>
          <FeatureCard {...feature} />
        </div>
      ))}
    </div>
  );

export default Features;