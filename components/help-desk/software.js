import style from '../../styles/HelpDesk.module.css'


export default function Software() {
  return (
        <div className={style.right}>
            <p className={style.Title}>What do you need help with?</p>
            <div className={style.here}>
                <div className={style.left}>
                    <img className={style.Icon} src="/icons/software1.png" />
                    <p className={style.Title}>Request New Sotftware</p>
                </div>
                <div className={style.right}>
                    <img className={style.Icon} src="/icons/software2.png" />
                    <p className={style.Title}>Check Request Status</p>
                </div>
            </div>
        </div>
  )
}
