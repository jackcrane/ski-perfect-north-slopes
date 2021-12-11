import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Svg, { G, Path, Image } from 'react-native-svg';
import {Slider} from '@miblanchard/react-native-slider';

const AnnotatedMap = (props) => {
  const [ strokeWidth, setStrokeWidth ] = useState(5);
  const openColor = 'rgba(0, 255, 0, 0.5)';
  const closedColor = 'rgba(255, 0, 0, 0.5)';
  const unknownColor = 'rgba(0, 0, 255, 0.5)';

  return (
    <View style={{}}>

      <Svg width="100%" viewBox="0 0 1270 679" style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:1.5, flex: 1, height: 200}}>
        <G id="TrailMap19" transform="matrix(1.05833,0,0,1.05833,0,0.00833333)">
          <Image href={require('../assets/pns-map.jpeg')} x="0" y="0" />
        </G>
        <Path d="M714,261C714.778,269.556 716.333,286.667 719,298C721.511,308.673 724.441,319.549 730,329C736.667,340.333 750.667,353.5 759,366C767.028,378.042 775.676,395.347 780,404" style={{fill:'none',stroke:props.snowReport.trail_status['Prime Time'].open ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M318,220C305.667,289.667 293.333,359.333 281,429" style={{fill:'none',stroke:props.snowReport.chair_lifts.red_chair ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M306,241C289.722,250.111 257.167,268.333 241,280C228.957,288.691 216.833,299.167 209,311C201.167,322.833 194,329.667 194,351C194,362.724 197.407,374.697 203,385C209.333,396.667 224.444,412.889 232,421" style={{fill:'none',stroke:props.snowReport.trail_status['Tuff Enuff'].open ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M307,214C301.449,214.515 290.348,215.545 282,216C272.833,216.5 262.333,215.333 252,217C242.417,218.546 232.857,224.714 226,232C218,240.5 213.185,257.351 204,268C192.5,281.333 167.5,300.133 157,312C150.029,319.878 143.063,328.885 141,339.2C138.833,350.033 138.869,365.449 144,377C150.5,391.633 159.167,410.211 180,427" style={{fill:'none',stroke:props.snowReport.trail_status['Backstage'].open ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M303,252C297,279.333 291,306.667 285,334" style={{fill:'none',stroke:props.snowReport.trail_status['Hollywood'].open ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M338,239C333.667,300 329.333,361 325,422" style={{fill:'none',stroke:props.snowReport.trail_status['Center Stage'].open ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M373,240C381.586,243.381 398.759,250.142 410,258C427.167,270 459.5,297.333 476,312C487.804,322.493 501.935,338.164 509,346" style={{fill:'none',stroke:props.snowReport.trail_status['Deception'].open ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M366,197C365.667,270 365.333,343 365,416" style={{fill:'none',stroke:props.snowReport.chair_lifts.white_chair ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M425,320C432.333,350.667 439.667,381.333 447,412" style={{fill:'none',stroke:props.snowReport.chair_lifts.blue_chair ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M449,331C454.167,341.222 464.5,361.667 470,375C474.823,386.693 479.608,402.898 482,411" style={{fill:'none',stroke:props.snowReport.trail_status['The Meadow'].open ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M411,333C407.667,344.611 401,367.833 399,380C397.594,388.552 398.531,400.184 399,406" style={{fill:'none',stroke:props.snowReport.trail_status['Audition'].open ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M499,402C508.167,400.667 526.5,398 535,397C539.977,396.414 546.659,396.138 550,396" style={{fill:'none',stroke:props.snowReport.trail_status['Cat Walk'].open ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M536,429C535,442 534,455 533,468" style={{fill:'none',stroke:props.snowReport.trail_status['Rehersal'].open ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M501,423C502.333,431.333 503.667,439.667 505,448" style={{fill:'none',stroke:unknownColor,strokeWidth:strokeWidth}}/>
        <Path d="M495,414C514.667,412.333 534.333,410.667 554,409" style={{fill:'none',stroke:unknownColor,strokeWidth:strokeWidth}}/>
        <Path d="M563,467C565.333,450.667 567.667,434.333 570,418" style={{fill:'none',stroke:unknownColor,strokeWidth:strokeWidth}}/>
        <Path d="M565,491C592.667,484.667 620.333,478.333 648,472" style={{fill:'none',stroke:unknownColor,strokeWidth:strokeWidth}}/>
        <Path d="M565,498C592.667,491.333 620.333,484.667 648,478" style={{fill:'none',stroke:unknownColor,strokeWidth:strokeWidth}}/>
        <Path d="M618,352C611.333,388.333 604.667,424.667 598,461" style={{fill:'none',stroke:props.snowReport.chair_lifts.green_chair ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M572,478C583.722,474.222 607.167,466.667 620,464C629.487,462.029 642.496,462.01 649,462" style={{fill:'none',stroke:props.snowReport.trail_status['Cat Walk'].open ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M580,506C592,504.111 616,500.333 629,496C639.474,492.509 651.825,484.17 658,480" style={{fill:'none',stroke:props.snowReport.trail_status['Understudy'].open ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M606,359C602.875,362.005 596.625,368.016 595,374C591.333,387.5 586.444,422.5 584,440" style={{fill:'none',stroke:props.snowReport.trail_status['Ski Wiz'].open ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M628,361C631.947,365.333 639.842,373.999 643,382C648,394.667 654.667,422.889 658,437" style={{fill:'none',stroke:props.snowReport.trail_status['Broadway'].open ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M379,192C385.903,191.684 399.71,191.052 410,192C422.667,193.167 440,196.833 455,199C469.977,201.163 491.333,203 500,205C502.994,205.691 506.521,207.964 507,211C507.5,214.167 505.564,220.261 503,224C499,229.833 488.333,240.611 483,246" style={{fill:'none',stroke:props.snowReport.trail_status['Hoyt Connection'].open ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M380,212C391.222,216.333 413.667,225 429,232C443.646,238.686 458.604,245.069 472,254C486.5,263.667 503,278 516,290C528.129,301.196 543.5,312.333 550,326C556.5,339.667 555.5,361.222 555,372" style={{fill:'none',stroke:props.snowReport.trail_status["Clyde's Super Slide"].open ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M580,329C585.61,330.589 596.829,333.766 605.465,333.766C615.965,333.766 630.744,329.628 643,329C654.989,328.386 667.234,327.617 679,330C692.167,332.667 709.658,336.162 722,345C735.5,354.667 748.833,361.889 760,388" style={{fill:'none',stroke:props.snowReport.trail_status['Rewind'].open ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M839,299C842,325 845,351 848,377" style={{fill:'none',stroke:props.snowReport.trail_status['Intermission'].open ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M863,315C866.667,340.667 870.333,366.333 874,392" style={{fill:'none',stroke:props.snowReport.trail_status['Special Effects'].open ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M597,215C624,221.889 678,235.667 715,246C749.841,255.73 789.667,268.167 819,277C843.029,284.236 876.333,292.667 891,299C897.924,301.99 904.15,308.017 907,315C910.333,323.167 910.833,338.667 911,348C911.138,355.73 909.046,365.91 908,371" style={{fill:'none',stroke:props.snowReport.trail_status['Runway'].open ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M620,213C647.167,219.167 701.5,231.5 737,240C769.078,247.681 801.139,255.463 833,264C867.833,273.333 918,286.833 946,296C964.886,302.183 988.833,308.667 1001,319C1011.91,328.269 1018.67,345.667 1019,358C1019.33,370.333 1010.67,383.333 1003,393C995.333,402.667 980.444,411.556 973,416" style={{fill:'none',stroke:props.snowReport.trail_status['The Far Side'].open ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M972,469C1021,444 1070,419 1119,394" style={{fill:'none',stroke:props.snowReport.tubing_park['tubing_carpet_1'] ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M976,472C1017.67,450.667 1059.33,429.333 1101,408" style={{fill:'none',stroke:props.snowReport.tubing_park['tubing_carpet_2'] ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M575,210C627.667,289 680.333,368 733,447" style={{fill:'none',stroke:props.snowReport.chair_lifts.orange_chair ? openColor : closedColor,strokeWidth:strokeWidth}}/>
        <Path d="M92,396C114,412 136,428 158,444" style={{fill:'none',stroke:unknownColor,strokeWidth:strokeWidth}}/>
        <Path d="M98,393C120,409 142,425 164,441" style={{fill:'none',stroke:unknownColor,strokeWidth:strokeWidth}}/>
        <Path d="M87,404C86.296,408.348 84.887,417.045 89,421C97.667,429.333 125.222,445.778 139,454" style={{fill:'none',stroke:props.snowReport.terrain_parks.jam_session_beginner_park ? openColor : closedColor,strokeWidth:strokeWidth}}/>
      </Svg>
      <Text>KEY:
        <Text> </Text>
        <Text style={{backgroundColor: 'red', color: 'white'}}>Closed</Text>
        <Text> </Text>
        <Text style={{backgroundColor: 'green', color: 'white'}}>Open</Text>
        <Text> </Text>
        <Text style={{backgroundColor: 'blue', color: 'white'}}>Unknown</Text> 
      </Text>
      <Text style={{paddingTop: 10, fontSize: 20}}>
        Slide to adjust width of map annotations:
      </Text>
      <Slider
        minimumValue={0}
        maximumValue={30}
        value={strokeWidth}
        onValueChange={value => setStrokeWidth(value[0])}
      />
      
    </View>


    // <Svg height="50%" width="50%" viewBox="0 0 100 100">
    //   <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" />
    //   <Rect x="15" y="15" width="70" height="70" stroke="red" strokeWidth="2" fill="yellow" />
    // </Svg>
  )
}

export default AnnotatedMap;