/*This is an Example of Calendar With Events*/
import React from 'react';
//import react in our project
import { Dimensions, View, Button } from 'react-native';
//import basic react native components
import EventCalendar from 'react-native-events-calendar';
//import EventCalendar component
let { width } = Dimensions.get('window');
//get the size of device

export default class App extends React.Component {
  constructor(props) {
    super(props);
    //Dummy event data to list in calendar 
    //You can also get the data array from the API call
    this.state = {
      events: [
        {
          start: '2019-01-01 00:00:00',
          end: '2019-01-01 02:00:00',
          title: 'New Year Party',
          summary: 'xyz Location',
        },{
          start: '2019-01-01 01:00:00',
          end: '2019-01-01 02:00:00',
          title: 'New Year Wishes',
          summary: 'Call to every one',
        },
        {
          start: '2019-01-02 00:30:00',
          end: '2019-01-02 01:30:00',
          title: 'Parag Birthday Party',
          summary: 'Call him',
        },
        {
          start: '2019-01-03 01:30:00',
          end: '2019-01-03 02:20:00',
          title: 'My Birthday Party',
          summary: 'Lets Enjoy',
        },
        {
          start: '2019-02-04 04:10:00',
          end: '2019-02-04 04:40:00',
          title: 'Engg Expo 2019',
          summary: 'Expoo Vanue not confirm',
        },
      ],
    };
  }

  eventClicked(event) {
    //On Click oC a event showing alert from here
    alert(JSON.stringify(event));
  }

  addEvent(event) {
    //On Click oC a event showing alert from here
    alert("oi");

    this.setState((state) => ({
      events: [...state.events, {
        start: '2019-01-01 04:10:00',
        end: '2019-01-01 04:40:00',
        title: 'Engg Expo 2019 bla',
        summary: 'Expoo Vanue not confirm',
      }]
    }))
  }
  

  render() {
    return (      
      <View style={{ flex: 1, marginTop: 20 }}>
        <Button
          style={{ marginTop: 20 }}
          onPress={this.addEvent.bind(this)}
          title="Add Event"
          color="#841584"
        />
        <EventCalendar
          eventTapped={this.eventClicked.bind(this)}
          //Function on event press
          events={this.state.events}
          //passing the Array of event
          width={width}
          //Container width
          size={60}
          //number of date will render before and after initDate 
          //(default is 30 will render 30 day before initDate and 29 day after initDate)
          initDate={'2019-01-01'}
          //show initial date (default is today)
          scrollToFirst
          //scroll to first event of the day (default true)
        />
      </View>
    );
  }
}