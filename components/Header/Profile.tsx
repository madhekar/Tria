import React, { FunctionComponent } from 'react';

import styled from 'styled-components';
import { ImageSourcePropType,
          GestureResponderEvent,
          StyleProp,
          ViewStyle,
          ImageStyle,
          TouchableOpacity,
          Image,
     } from 'react-native';

const StyledView = styled(TouchableOpacity)`
    flex-direction: column;
    height: 60px;
    width: 60px;
    border-radius: 0px;
`;

const StyledImage = styled(Image)`
resize: cover;  //resize-mode
height: 100%;
width: 100%;
border-radius: 5px;
`;

interface ProfileProps {
    img: ImageSourcePropType;
    imgStyle?: StyleProp<ImageStyle>;
    imgContainerStyle?: StyleProp<ViewStyle>;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;

}

const Profile: FunctionComponent<ProfileProps> = (props) => {
  return (
    <StyledView onPress={props.onPress} style={props.imgContainerStyle}>
      <StyledImage style={props.imgStyle} source={props.img}
      />
    </StyledView>
  )
};

export default Profile;
