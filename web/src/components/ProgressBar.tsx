interface ProgressBarProp{
    progress: number
}

export function ProgessBar(props: ProgressBarProp) {
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role={"progressbar"}
        aria-label="Progresso de hábitos completados esse dia"
        aria-valuenow={props.progress}
        className="h-3 rounded-xl bg-violet-600 w-3/4 transition-all"
        style={{width: `${props.progress}%`}}
      ></div>
    </div>
  );
}
