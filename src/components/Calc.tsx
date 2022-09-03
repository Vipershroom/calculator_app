import Button from './Button';
import './css/calc.scss'
function Calc() {
  return (
   <>
   <div className='num-grid'>
        <Button btn={"e"} />
        <Button btn={"+-"} />
        <Button btn={"%"}/>
        <Button btn={"AC"} />
        <Button btn={7}/>
        <Button btn={8}/>
        <Button btn={9}/>
        <Button btn={'/'} />
        <Button btn={4}/>
        <Button btn={5}/>
        <Button btn={6}/>
        <Button btn={'x'} />
        <Button btn={1}/>
        <Button btn={2}/>
        <Button btn={3}/>
        <Button btn={'-'} />
        <Button btn={0}/>
   </div>
   </>
  );
}


export default Calc;
