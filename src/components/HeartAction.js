import React, { useState } from "react";
import { TopNavigationAction, Icon } from "@ui-kitten/components";

const HeartAction = () => {
  const [heartFilled, setHeartFilled] = useState(false);

  // Change icon between filled and outline
  const HeartIcon = (props) => <Icon {...props} name={props.filled ? "heart" : "heart-outline"} />;

  // Handle heart icon press
  const toggleHeart = () => {
    setHeartFilled(!heartFilled);
    // TODO: Add/remove venue from user's favourites
  };

  return (
    <TopNavigationAction
      icon={(props) => <HeartIcon {...props} filled={heartFilled} />}
      onPress={toggleHeart}
    />
  );
};

export default HeartAction;
