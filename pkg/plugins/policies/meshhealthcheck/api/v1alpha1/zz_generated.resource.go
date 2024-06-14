// Generated by tools/policy-gen.
// Run "make generate" to update this file.

// nolint:whitespace
package v1alpha1

import (
	_ "embed"
	"errors"
	"fmt"

	"k8s.io/kube-openapi/pkg/validation/spec"
	"sigs.k8s.io/yaml"

	"github.com/kumahq/kuma/pkg/core/resources/model"
)

//go:embed schema.yaml
var rawSchema []byte

func init() {
	var schema spec.Schema
	if rawSchema != nil {
		if err := yaml.Unmarshal(rawSchema, &schema); err != nil {
			panic(err)
		}
	}
	rawSchema = nil
	MeshHealthCheckResourceTypeDescriptor.Schema = &schema
}

const (
	MeshHealthCheckType model.ResourceType = "MeshHealthCheck"
)

var _ model.Resource = &MeshHealthCheckResource{}

type MeshHealthCheckResource struct {
	Meta model.ResourceMeta
	Spec *MeshHealthCheck
}

func NewMeshHealthCheckResource() *MeshHealthCheckResource {
	return &MeshHealthCheckResource{
		Spec: &MeshHealthCheck{},
	}
}

func (t *MeshHealthCheckResource) GetMeta() model.ResourceMeta {
	return t.Meta
}

func (t *MeshHealthCheckResource) SetMeta(m model.ResourceMeta) {
	t.Meta = m
}

func (t *MeshHealthCheckResource) GetSpec() model.ResourceSpec {
	return t.Spec
}

func (t *MeshHealthCheckResource) SetSpec(spec model.ResourceSpec) error {
	protoType, ok := spec.(*MeshHealthCheck)
	if !ok {
		return fmt.Errorf("invalid type %T for Spec", spec)
	} else {
		if protoType == nil {
			t.Spec = &MeshHealthCheck{}
		} else {
			t.Spec = protoType
		}
		return nil
	}
}

func (t *MeshHealthCheckResource) GetStatus() model.ResourceStatus {
	return nil
}

func (t *MeshHealthCheckResource) SetStatus(_ model.ResourceStatus) error {
	return errors.New("status not supported")
}

func (t *MeshHealthCheckResource) Descriptor() model.ResourceTypeDescriptor {
	return MeshHealthCheckResourceTypeDescriptor
}

func (t *MeshHealthCheckResource) Validate() error {
	if v, ok := interface{}(t).(interface{ validate() error }); !ok {
		return nil
	} else {
		return v.validate()
	}
}

var _ model.ResourceList = &MeshHealthCheckResourceList{}

type MeshHealthCheckResourceList struct {
	Items      []*MeshHealthCheckResource
	Pagination model.Pagination
}

func (l *MeshHealthCheckResourceList) GetItems() []model.Resource {
	res := make([]model.Resource, len(l.Items))
	for i, elem := range l.Items {
		res[i] = elem
	}
	return res
}

func (l *MeshHealthCheckResourceList) GetItemType() model.ResourceType {
	return MeshHealthCheckType
}

func (l *MeshHealthCheckResourceList) NewItem() model.Resource {
	return NewMeshHealthCheckResource()
}

func (l *MeshHealthCheckResourceList) AddItem(r model.Resource) error {
	if trr, ok := r.(*MeshHealthCheckResource); ok {
		l.Items = append(l.Items, trr)
		return nil
	} else {
		return model.ErrorInvalidItemType((*MeshHealthCheckResource)(nil), r)
	}
}

func (l *MeshHealthCheckResourceList) GetPagination() *model.Pagination {
	return &l.Pagination
}

func (l *MeshHealthCheckResourceList) SetPagination(p model.Pagination) {
	l.Pagination = p
}

var MeshHealthCheckResourceTypeDescriptor = model.ResourceTypeDescriptor{
	Name:                MeshHealthCheckType,
	Resource:            NewMeshHealthCheckResource(),
	ResourceList:        &MeshHealthCheckResourceList{},
	Scope:               model.ScopeMesh,
	KDSFlags:            model.GlobalToAllZonesFlag | model.ZoneToGlobalFlag,
	WsPath:              "meshhealthchecks",
	KumactlArg:          "meshhealthcheck",
	KumactlListArg:      "meshhealthchecks",
	AllowToInspect:      true,
	IsPolicy:            true,
	IsExperimental:      false,
	SingularDisplayName: "Mesh Health Check",
	PluralDisplayName:   "Mesh Health Checks",
	IsPluginOriginated:  true,
	IsTargetRefBased:    true,
	HasToTargetRef:      true,
	HasFromTargetRef:    false,
	HasStatus:           false,
}
