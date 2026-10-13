import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ReactFlow,
  Node,
  Edge,
  Handle,
  Position,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { ArrowRight, Maximize2, X } from "lucide-react";

const handleStyle = { opacity: 0, width: 1, height: 1, border: "none" };

const ProcessNode = ({ data }: any) => (
  <div className="px-4 py-3 bg-zinc-100 rounded-xl min-w-[160px] max-w-[180px] text-center relative">
    <Handle type="target" position={Position.Top} id="top" style={handleStyle} />
    <Handle type="target" position={Position.Left} id="left" style={handleStyle} />
    <Handle type="target" position={Position.Right} id="right-target" style={handleStyle} />
    <Handle type="target" position={Position.Bottom} id="bottom-target" style={handleStyle} />
    <span className="text-xs font-semibold text-zinc-800 leading-tight block">
      {data.label}
    </span>
    {data.subtext && (
      <span className="text-[10px] text-zinc-400 block mt-1">{data.subtext}</span>
    )}
    <Handle type="source" position={Position.Right} id="right" style={handleStyle} />
    <Handle type="source" position={Position.Bottom} id="bottom" style={handleStyle} />
    <Handle type="source" position={Position.Top} id="top-source" style={handleStyle} />
    <Handle type="source" position={Position.Left} id="left-source" style={handleStyle} />
  </div>
);

const GatewayNode = ({ data }: any) => {
  const isQuestion = data.label && data.label !== "X";
  return (
    <div className="relative flex items-center justify-center min-w-[36px] min-h-[36px]">
      <Handle type="target" position={Position.Top} id="top" style={handleStyle} />
      <Handle type="target" position={Position.Left} id="left" style={handleStyle} />
      <Handle type="target" position={Position.Right} id="right-target" style={handleStyle} />
      <Handle type="target" position={Position.Bottom} id="bottom-target" style={handleStyle} />
      
      <div className={`bg-purple-100 border border-purple-200 rounded-md flex items-center justify-center ${
        isQuestion ? "px-3 py-1.5 min-w-[90px]" : "w-9 h-9"
      }`}>
        <span className="text-[11px] font-bold text-purple-900 text-center leading-tight">
          {data.label || "X"}
        </span>
      </div>

      <Handle type="source" position={Position.Right} id="right" style={handleStyle} />
      <Handle type="source" position={Position.Bottom} id="bottom" style={handleStyle} />
      <Handle type="source" position={Position.Top} id="top-source" style={handleStyle} />
      <Handle type="source" position={Position.Left} id="left-source" style={handleStyle} />
    </div>
  );
};

const EventNode = ({ data }: any) => {
  const isStart = data.type === "start";
  return (
    <div
      className={`w-9 h-9 rounded-full flex items-center justify-center ${
        isStart ? "bg-emerald-500 text-white" : "bg-rose-500 text-white"
      }`}
    >
      {!isStart && <Handle type="target" position={Position.Left} id="left" style={handleStyle} />}
      {isStart ? (
        <ArrowRight className="w-4 h-4" />
      ) : (
        <div className="w-3.5 h-3.5 rounded-full border-2 border-white bg-rose-500" />
      )}
      {isStart && <Handle type="source" position={Position.Right} id="right" style={handleStyle} />}
    </div>
  );
};

const LaneHeader = ({ data }: any) => (
  <div className="h-full w-full border-b border-zinc-100 flex items-center px-2">
    <span className="text-sm font-bold uppercase tracking-wider text-zinc-500">
      {data.label}
    </span>
  </div>
);

export function BpmnFlow() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nodeTypes = useMemo(
    () => ({
      process: ProcessNode,
      gateway: GatewayNode,
      event: EventNode,
      lane: LaneHeader,
    }),
    []
  );

  const nodes: Node[] = [
    { id: "lane-client", type: "lane", data: { label: "Клиент" }, position: { x: -120, y: 0 }, style: { width: 1550, height: 130, zIndex: -1 } },
    { id: "lane-sec", type: "lane", data: { label: "Секретарь" }, position: { x: -120, y: 140 }, style: { width: 1550, height: 260, zIndex: -1 } },
    { id: "lane-ork", type: "lane", data: { label: "ОРК" }, position: { x: -120, y: 410 }, style: { width: 1550, height: 260, zIndex: -1 } },
    { id: "lane-vba", type: "lane", data: { label: "VBA" }, position: { x: -120, y: 680 }, style: { width: 1550, height: 210, zIndex: -1 } },

    // --- Клиент ---
    { id: "start", type: "event", data: { type: "start" }, position: { x: 60, y: 40 } },
    { id: "c1", type: "process", data: { label: "Отправка формы на почту" }, position: { x: 140, y: 35 } },
    { id: "c2", type: "process", data: { label: "Исправление ошибок" }, position: { x: 560, y: 35 } },

    // --- Секретарь ---
    { id: "s_gw1", type: "gateway", data: { label: "X" }, position: { x: 202, y: 165 } },
    { id: "s1", type: "process", data: { label: "Получение письма" }, position: { x: 140, y: 245 } },
    { id: "s2", type: "process", data: { label: "Просмотр на ошибки" }, position: { x: 350, y: 245 } },
    { id: "s_gw2", type: "gateway", data: { label: "Есть ошибки?" }, position: { x: 595, y: 245 } },
    { id: "s3", type: "process", data: { label: "Связывание с клиентом" }, position: { x: 560, y: 145 } },
    { id: "s4", type: "process", data: { label: "Отправка формы в ОРК" }, position: { x: 560, y: 335 } },

    // --- ОРК ---
    { id: "o1", type: "process", data: { label: "Получение письма" }, position: { x: 200, y: 435 } },
    { id: "o2", type: "process", data: { label: "Просмотр на ошибки" }, position: { x: 390, y: 435 } },
    { id: "o_gw1", type: "gateway", data: { label: "Есть ошибки?" }, position: { x: 615, y: 435 } },
    { id: "o3", type: "process", data: { label: "Отправка формы в БД" }, position: { x: 770, y: 435 } },
    
    { id: "o_gw_sec", type: "gateway", data: { label: "X" }, position: { x: 642, y: 515 } },
    { id: "o4", type: "process", data: { label: "Связывание с секретарём, возврат формы" }, position: { x: 390, y: 585 } },

    { id: "o_gw_vba", type: "gateway", data: { label: "X" }, position: { x: 810, y: 515 } },
    { id: "o_fix", type: "process", data: { label: "Исправление" }, position: { x: 890, y: 510 } },
    { id: "o_gw_can_fix", type: "gateway", data: { label: "Можно исправить самостоятельно?" }, position: { x: 1080, y: 515 } },
    { id: "o_view_err", type: "process", data: { label: "Просмотр ошибки" }, position: { x: 1250, y: 435 } },

    // --- VBA ---
    { id: "v1", type: "process", data: { label: "Получение формы" }, position: { x: 770, y: 710 } },
    { id: "v2", type: "process", data: { label: "Загрузка в БД" }, position: { x: 950, y: 710 } },
    { id: "v_gw1", type: "gateway", data: { label: "Есть ошибки?" }, position: { x: 1170, y: 710 } },
    { id: "v_err", type: "process", data: { label: "Перенос в «Ошибка»" }, position: { x: 1250, y: 625 } },
    { id: "v_ok", type: "process", data: { label: "Перенос в «Архив»" }, position: { x: 1110, y: 790 } },
    { id: "end", type: "event", data: { type: "end" }, position: { x: 1340, y: 795 } },
  ];

  const defaultMarker = {
    type: MarkerType.ArrowClosed,
    width: 12,
    height: 12,
    color: "#a1a1aa",
  };

  const edgeStyle = { stroke: "#a1a1aa", strokeWidth: 1.5 };

  const rawEdges = [
    { id: "e-1", source: "start", sourceHandle: "right", target: "c1", targetHandle: "left" },
    { id: "e-2", source: "c1", sourceHandle: "bottom", target: "s_gw1", targetHandle: "top" },
    { id: "e-3", source: "s_gw1", sourceHandle: "bottom", target: "s1", targetHandle: "top" },
    { id: "e-4", source: "s1", sourceHandle: "right", target: "s2", targetHandle: "left" },
    { id: "e-5", source: "s2", sourceHandle: "right", target: "s_gw2", targetHandle: "left" },
    { id: "e-6", source: "s_gw2", sourceHandle: "top-source", target: "s3", targetHandle: "bottom-target", label: "Да" },
    { id: "e-7", source: "s3", sourceHandle: "top-source", target: "c2", targetHandle: "bottom-target" },
    { id: "e-8", source: "c2", sourceHandle: "left-source", target: "s_gw1", targetHandle: "right-target" },
    { id: "e-9", source: "s_gw2", sourceHandle: "bottom", target: "s4", targetHandle: "top", label: "Нет" },
    
    { id: "e-10", source: "s4", sourceHandle: "bottom", target: "o1", targetHandle: "top" },
    
    { id: "e-11", source: "o1", sourceHandle: "right", target: "o2", targetHandle: "left" },
    { id: "e-12", source: "o2", sourceHandle: "right", target: "o_gw1", targetHandle: "left" },
    { id: "e-13", source: "o_gw1", sourceHandle: "right", target: "o3", targetHandle: "left", label: "Нет" },
    { id: "e-14", source: "o_gw1", sourceHandle: "bottom", target: "o_gw_sec", targetHandle: "top", label: "Да" },
    { id: "e-15", source: "o_gw_sec", sourceHandle: "bottom", target: "o4", targetHandle: "right-target" },
    { id: "e-16", source: "o4", sourceHandle: "left-source", target: "s_gw1", targetHandle: "left" },

    { id: "e-17", source: "o3", sourceHandle: "bottom", target: "o_gw_vba", targetHandle: "top" },
    { id: "e-18", source: "o_gw_vba", sourceHandle: "bottom", target: "v1", targetHandle: "top" },

    { id: "e-19", source: "v1", sourceHandle: "right", target: "v2", targetHandle: "left" },
    { id: "e-20", source: "v2", sourceHandle: "right", target: "v_gw1", targetHandle: "left" },
    { id: "e-21", source: "v_gw1", sourceHandle: "bottom", target: "v_ok", targetHandle: "top", label: "Нет" },
    { id: "e-22", source: "v_gw1", sourceHandle: "top-source", target: "v_err", targetHandle: "bottom-target", label: "Да" },
    { id: "e-23", source: "v_ok", sourceHandle: "right", target: "end", targetHandle: "left" },

    { id: "e-24", source: "v_err", sourceHandle: "top-source", target: "o_view_err", targetHandle: "bottom-target" },
    { id: "e-25", source: "o_view_err", sourceHandle: "left-source", target: "o_gw_can_fix", targetHandle: "top" },
    { id: "e-26", source: "o_gw_can_fix", sourceHandle: "left-source", target: "o_fix", targetHandle: "right-target", label: "Да" },
    { id: "e-27", source: "o_fix", sourceHandle: "left-source", target: "o_gw_vba", targetHandle: "right-target" },
    { id: "e-28", source: "o_gw_can_fix", sourceHandle: "top-source", target: "o_gw_sec", targetHandle: "right-target", label: "Нет" },
  ];

  const edges: Edge[] = rawEdges.map((e) => ({
    ...e,
    type: "smoothstep",
    style: edgeStyle,
    markerEnd: defaultMarker,
  }));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsFullscreen(false);
    };
    if (isFullscreen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="w-full bg-white rounded-2xl pt-2 px-4 pb-4 border border-zinc-100 flex flex-col overflow-hidden -mt-2 sm:-mt-4 mb-6"
      >
        <div className="pb-2 flex items-center justify-between border-b border-zinc-50">
          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Выпуск полиса: As-Is процесс
          </span>
          <button
            onClick={() => setIsFullscreen(true)}
            className="p-1.5 rounded-lg hover:bg-zinc-100 text-zinc-500 hover:text-zinc-800 transition-colors flex items-center gap-1 text-xs font-medium"
            title="Развернуть на весь экран"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Нативный горизонтальный скроллер для мобильных */}
        <div className="w-full overflow-x-auto touch-pan-x">
          {/* pointer-events-none отключает перехват тач-событий холстом React Flow на iOS */}
          <div className="w-full min-w-[800px] sm:min-w-full h-[480px] pointer-events-none">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              proOptions={{ hideAttribution: true }}
              fitView
              fitViewOptions={{ padding: 0.01 }}
              zoomOnScroll={false}
              zoomOnPinch={false}
              zoomOnDoubleClick={false}
              panOnDrag={false}
              preventScrolling={false}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable={false}
            />
          </div>
        </div>
      </motion.section>

      {/* Полноэкранный режим */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md flex flex-col p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
            <span className="text-xs sm:text-sm font-semibold text-zinc-600 uppercase tracking-wider pr-2">
              Выпуск полиса: As-Is процесс
            </span>
            <button
              onClick={() => setIsFullscreen(false)}
              className="w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors flex items-center justify-center shrink-0"
              aria-label="Закрыть"
              title="Закрыть (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* В полноэкранном режиме отдаем полное управление панорамированием и зумом жестам */}
          <div className="w-full h-full flex-1 mt-4 relative touch-none">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              proOptions={{ hideAttribution: true }}
              fitView
              fitViewOptions={{ padding: 0.05 }}
              zoomOnScroll={true}
              zoomOnPinch={true}
              zoomOnDoubleClick={true}
              panOnDrag={true}
              preventScrolling={true}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable={false}
            />
          </div>
        </div>
      )}
    </>
  );
}