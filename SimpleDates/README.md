# SimpleDates
SimpleDates creates an object named `date` in your code that allows you to easily get information about the date.

#### raw
Returns a string of the date.
- Type: integer<br>
- Example: `1672352243949`

#### full
Returns the full date.
- Type: string<br>
- Example: `Thu Dec 29 2022 17:17:23 GMT-0500 (Eastern Standard Time)`

#### zone
Returns the timezone.
- Type: string<br>
- Example: `Eastern`

#### gmt
Returns the GMT.<br>
- Type: integer<br>
- Example: `500`

#### weekday
Returns the day of the week.<br>
- Type: string<br>
- Example: `Thu`

#### month
Returns an object:<br>
- str: <br>
  - Type: string<br>
  - Example: `Dec`<br>
- int:<br>
  - Type: integer<br>
  - Example: `12`<br>

#### day
Returns the day as a number.<br>
- Type: integer<br>
- Example: `29`

#### year
Returns the year.<br>
- Type: integer<br>
- Example: `2022`

#### mmddyy
Returns the date in a mm/dd/yy format.<br>
- Type: string<br>
- Example: `12/29/2022`

#### fulltime
Returns the full time.<br>
- Type: string<br>
- Example: `5:17:23 PM`

#### time
Returns the time in a hh:mm:ss format.<br>
- Type: string<br>
- Example: `5:17:23`

#### meridiem
Returns the meridiem (AM or PM).<br>
- Type: string<br>
- Example: `PM`

#### hour
Returns the hour.<br>
- Type: integer<br>
- Example: `5`

#### minute
Returns the minute.<br>
- Type: integer<br>
- Example: `17`

#### second
Returns the second.<br>
- Type: integer<br>
- Example: `23`

### I'm aware that these docs suck. Please open an issue if something is incorrect.
